import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please provide a user_id"],
    },
    user_name: String,
    storyType: {
      type: String,
      required: [true, "Please provide story type"],
    },
    bgColor: String,
    privacyType: {
      type: String,
      required: [true, "Please provide privacy type"],
    },
    storyText: String,
    storyImage: String,
    imageScale: String,
    viewers: [
      {
        user_id: String,
        userName: String,
        reactions: [String], // like, love, wow etc
        comment: String,
      },
    ],
  },
  { timestamps: true }
);

const Story = mongoose.models.stories || mongoose.model("stories", storySchema);

export default Story;
