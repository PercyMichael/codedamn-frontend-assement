import React from "react";
interface SideBarRowProps {
  name: string;
  description: string;
}

const VisibilityOption = (props: SideBarRowProps) => {
  return (
    <div id="setting" className="flex items-center  justify-between">
      <div>
        <h1 className="font-bold text-base">{props.name}</h1>
        <p className="text-sm font-normal text-[#71717A]">
          {props.description}
        </p>
      </div>
      <div className="">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />

              <div className="block bg-[#4F46E5] w-12 h-7 rounded-full"></div>

              <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default VisibilityOption;
