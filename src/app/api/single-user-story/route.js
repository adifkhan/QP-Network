import { connect } from "@/dbConfig/dbConfig";
import Story from "@/models/storyModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // const currentDate = new Date();
    // const pastDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    const stories = await Story.find({ user_id: userId });
    // neglecting createdAt here for now
    return NextResponse.json({ stories, status: 200 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
