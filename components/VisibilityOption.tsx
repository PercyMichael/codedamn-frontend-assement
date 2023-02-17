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
        <input type="checkbox" className="toggle toggle-primary" />
      </div>
    </div>
  );
};

export default VisibilityOption;
