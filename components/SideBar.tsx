import { FiChrome } from "react-icons/fi";
import SideBarRow from "./SideBarRow";

const SideBar = () => {
  return (
    <div className="w-1/3" id="SideBar">
      <div className="bg-[#FAFAFA]  py-6 rounded-2xl border border-[#F4F4F5]">
        <SideBarRow name="Profile" url="/Profile" />
        <SideBarRow name="Socials" url="/Socials" />
      </div>
    </div>
  );
};

export default SideBar;
