import Image from "next/image";
import React from "react";

const ProfileForm = () => {
  return (
    <div className="w-full flex py-4">
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
            <button className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg">
              Upload new picture
            </button>
            <button className="px-4 py-2 bg-[#F4F4F5] text-black rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div id="form" className="bg-red-400">
        <form></form>
      </div>
    </div>
  );
};

export default ProfileForm;
