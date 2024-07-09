import { connect } from "@/dbConfig/dbConfig";
import Story from "@/models/storyModel";
import { NextResponse } from "next/server";

connect();

export async function PATCH(request) {
  try {
    const reqBody = await request.json();
    const { storyId, userId, userName, actionType, reactType, comment } = reqBody;

    let result;

    switch (actionType) {
      case "reacted":
        result = handleReact({ storyId, userId, reactType });
        return NextResponse.json({ result, status: 200 }, { status: 200 });
      case "commented":
        result = await handleComment({ storyId, userId, userName, comment });
        return NextResponse.json({ result, status: 200 }, { status: 200 });
      default:
        result = await handleViewed({ storyId, userId, userName });
        return NextResponse.json({ result, status: 200 }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

const handleViewed = async ({ storyId, userId, userName }) => {
  const story = await Story.findOne({ _id: storyId, "viewers.user_id": userId });

  if (story) {
    return story;
  } else {
    const newStory = await Story.updateOne(
      { _id: storyId },
      { $push: { viewers: { user_id: userId, userName } } },
      { new: true }
    );
    return newStory;
  }
};

const handleReact = async ({ storyId, userId, reactType }) => {
  const story = await Story.findOne({ _id: storyId, "viewers.user_id": userId });

  if (story) {
    const newStory = await Story.updateOne(
      { _id: storyId, "viewers.user_id": userId },
      {
        $addToSet: {
          "viewers.$.reactions": { $each: reactType },
        },
      },
      { new: true }
    );
    return newStory;
  } else {
    const newStory = await Story.updateOne(
      { _id: storyId },
      { $push: { viewers: { user_id: userId, userName, reactions: [reactType] } } },
      { new: true }
    );
    return newStory;
  }
};

const handleComment = async ({ storyId, userName, userId, comment }) => {
  const story = await Story.findOne({ _id: storyId, "viewers.user_id": userId });
  if (story) {
    const newStory = await Story.updateOne(
      { _id: storyId, "viewers.user_id": userId },
      {
        $set: {
          "viewers.comment": comment,
        },
      },
      { new: true }
    );
    return newStory;
  } else {
    const newStory = await Story.updateOne(
      { _id: storyId },
      { $push: { viewers: { user_id: userId, userName, comment } } },
      { new: true }
    );
    return newStory;
  }
};
