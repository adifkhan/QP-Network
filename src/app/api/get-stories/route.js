import { connect } from "@/dbConfig/dbConfig";
import Story from "@/models/storyModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    const myStories = await Story.find({ user_id: userId, createdAt: { $gte: pastDate } });

    const pipeline = [
      {
        $match: { user_id: { $ne: userId } }, // neglecting createdAt here for now
      },
      {
        $group: { _id: "$user_id", stories: { $push: "$$ROOT" } },
      },
      {
        $project: { _id: 0, stories: 1 },
      },
    ];
    const otherStories = await Story.aggregate(pipeline);

    return NextResponse.json({ myStories, otherStories, status: 200 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
