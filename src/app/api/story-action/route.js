import { connect } from "@/dbConfig/dbConfig";
import Story from "@/models/storyModel";
import { NextResponse } from "next/server";

connect();

export async function PATCH(request) {
  try {
    const reqBody = await request.json();
    const { storyId, userId, actionType, reactType, commentText } = reqBody;
    console.log(storyId, userId, actionType, reactType, commentText);

    switch (actionType) {
      case "reacted":
        handleReact(actionType, storyId, userId);
        break;
      case "commented":
        handleComment(actionType);
        break;
      default:
        const result = await handleViewed(storyId, userId);
        return NextResponse.json({ result, status: 200 }, { status: 200 });
    }

    // const stories = await Story.find({ user_id: userId });
    // neglecting createdAt here for now
    return NextResponse.json({ status: 200 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

const handleViewed = async (storyId, userId) => {
  console.log(storyId, userId);
};

const handleReact = async (actionType) => {
  console.log(actionType);
};
const handleComment = async (actionType) => {
  console.log(actionType);
};
