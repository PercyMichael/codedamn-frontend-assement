import React from "react";

const SocialsForm = () => {
  return (
    <div className="w-full flex flex-col gap-y-14 px-20">
      <div id="form" className="flex flex-col gap-y-10">
        <form className="flex flex-col w-full gap-y-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              GitHub
            </label>
            <input
              placeholder="GitHub profile URL"
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
              Linkedin
            </label>
            <input
              placeholder="Linkedin profile URL"
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
              Facebook
            </label>
            <input
              placeholder="Facebook profile URL"
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
              Instagram
            </label>
            <input
              placeholder="Instagram profile URL"
              type="text"
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm text-[#A1A1AA] "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              Dribble
            </label>
            <input
              placeholder="Dribble profile URL"
              type="text"
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm text-[#A1A1AA]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="display-name"
              className="text-[#18181B] text-sm font-semibold"
            >
              Behance
            </label>
            <input
              placeholder="Behance profile URL"
              type="text"
              id="display-name"
              className="py-[14px] px-3 border border-[#E4E4E7] rounded-lg outline-none font-normal text-sm text-[#A1A1AA] "
            />
          </div>
        </form>

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

export default SocialsForm;
