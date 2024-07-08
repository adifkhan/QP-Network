import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { user_id, storyType, bgColor, privacyType, storyText, storyImage, imageScale } = reqBody;
    console.log(user_id, storyType, bgColor, privacyType, storyText, storyImage, imageScale);

    // //check if user already exists //
    // const user = await User.findOne({ email });
    // if (user) {
    //   return NextResponse.json(
    //     { message: 'this user already exists' },
    //     { status: 400 }
    //   );
    // }

    // // hash the password //
    // const salt = await bcryptjs.genSalt(10);
    // const hashedPassword = await bcryptjs.hash(password, salt);

    // // create new user //
    // const newUser = new User({
    //   userName,
    //   email,
    //   password: hashedPassword,
    // });

    // const savedUser = await newUser.save();

    return NextResponse.json({
      message: "user created successgully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
