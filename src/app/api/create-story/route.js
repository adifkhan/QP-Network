import { connect } from "@/dbConfig/dbConfig";
import Story from "@/models/storyModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { user_id, storyType, bgColor, privacyType, storyText, storyImage, imageScale } = reqBody;

    // create new story
    const story = new Story({
      user_id,
      storyType,
      bgColor,
      privacyType,
      storyText,
      storyImage,
      imageScale,
    });

    const newStory = await story.save();

    return NextResponse.json(
      {
        message: "New story created",
        newStory,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
