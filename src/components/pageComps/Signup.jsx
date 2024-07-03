"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import TextInput from "../inputComps/TextInput";
import PasswordInput from "../inputComps/PasswordInput";
import DoBInput from "../inputComps/DoBInput";
import PhoneInput from "../inputComps/PhoneInput";
import SelectInput from "../inputComps/SelectInput";

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex gap-20 items-start bg-[#0b3243] min-h-screen p-20">
      <section className="text-white mt-28">
        <h2 className="text-[50px] font-semibold">
          Welcome to the first decentralised Social Network in the world
        </h2>
        <p>
          We are the only decentralised social network that gives opportunity to monetise your time
          even if you are a normal user who doesn’t create any content and use the earning to buy
          any service or goods from the native marketplace.
        </p>
        <button
          className="btn bg-accent text-white border-none font-medium mt-6 px-6"
          onClick={() => router.push("/signin")}
        >
          Login Now!
        </button>
      </section>
      <section className="w-[80%] min-w-[350px]">
        <div className="bg-white rounded p-6">
          <h6 className="text-accent text-xl font-bold">Register your Account</h6>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-neutral flex flex-col gap-2 mt-4">
              <div className="flex items-start gap-2">
                <TextInput
                  name="firstname"
                  label="First Name"
                  type="text"
                  placeholder="First name"
                  register={register}
                  errors={errors?.firstname}
                />
                <TextInput
                  name="lastname"
                  label="Last Name"
                  type="text"
                  placeholder="Last name"
                  register={register}
                  errors={errors?.lastname}
                />
              </div>
              <TextInput
                name="email"
                label="Email Address"
                type="text"
                placeholder="Enter your email address"
                register={register}
                errors={errors?.email}
              />
              <PasswordInput register={register} errors={errors?.password} />
              <DoBInput
                register={register}
                errors={errors?.bDate?.date ?? errors?.bDate?.month ?? errors?.bDate?.year}
              />
              <PhoneInput
                register={register}
                errors={errors?.phone?.country ?? errors?.phone?.number}
              />
              <SelectInput
                name="gender"
                label="Your Gender"
                register={register}
                errors={errors?.gender}
                options={["male", "female", "custom"]}
              />
            </div>
            <label className="cursor-pointer flex items-center gap-2 text-neutral mt-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent checkbox-xs border-accent rounded-sm"
              />
              <span className="text-xs">
                I accept the <span className="text-accent font-medium">Terms and Conditions</span>{" "}
                of the website
              </span>
            </label>
            <button
              type="submit"
              className="btn w-full min-h-10 h-10 bg-accent text-white border-none font-medium mt-4 rounded"
            >
              Complete Registration!
            </button>
          </form>
          <div className="divider divider-neutral text-sm text-neutral w-[80%] mx-auto mt-6 mb-3">
            or sign up with
          </div>
          <p className="text-sm text-neutral text-center">
            Already have an account?{" "}
            <span
              className="text-accent font-semibold cursor-pointer hover:underline"
              onClick={() => router.push("/signin")}
            >
              Login here
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
