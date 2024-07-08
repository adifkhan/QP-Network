import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please provide a user_id"],
    },
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
  },
  { timestamps: true }
);

const Story = mongoose.models.stories || mongoose.model("stories", storySchema);

export default Story;
