import Image from "next/image";
import React from "react";
import VisibilityOption from "./VisibilityOption";

const ProfileForm = () => {
  return (
    <div className="w-full flex flex-col py-4 gap-y-14">
      <div id="row-1">
        <div className="h-10 bg-red-blue w-full flex items-center gap-6">
          <Image
            alt="profile"
            src={"/profile.jpeg"}
            width={72}
            height={72}
            className="rounded-full aspect-square"
          />
          <div id="buttons" className="flex gap-3">
            <button className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg font-semibold text-sm">
              Upload new picture
            </button>
            <button className="px-4 py-2 bg-[#F4F4F5] text-black rounded-lg font-semibold text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div id="form" className="flex flex-col gap-y-10">
        <form className="flex flex-col w-full gap-y-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              Display name
            </label>
            <input
              type="text"
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm"
            />
            <p className="text-[#71717A] text-sm font-normal py-1">
              Name entered above will be used for all issued certificates
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              About
            </label>
            <textarea
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              Professional
            </label>
            <input
              type="text"
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              Date of birth
            </label>
            <input
              type="date"
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm text-[#A1A1AA] uppercase"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              Gender
            </label>
            <select className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm text-[#A1A1AA]">
              <option>What is your gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </form>

        <div id="visbility" className="flex flex-col gap-y-6">
          <div>
            <p className="text-2xl font-bold">Section visibilty</p>
            <span className="text-base font-normal text-[#71717A] ">
              Select which sections and content should show on your profile
              page.
            </span>
          </div>

          <div className="bg-[#FAFAFA] rounded-2xl p-6 flex flex-col gap-y-4">
            <VisibilityOption
              name="Followers and following"
              description="Shows your followers and the users you follow on codedamn"
            />
            <VisibilityOption
              name="XP"
              description="Shows the XP you have earned"
            />
            <VisibilityOption
              name="Achievement badges"
              description="Shows your relative percentile and proficiency"
            />
          </div>
        </div>

        <div id="buttons2" className="flex gap-3 justify-end">
          <button className="px-4 py-2 bg-[#F4F4F5] text-black rounded-lg font-semibold text-sm">
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg font-semibold text-sm">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
