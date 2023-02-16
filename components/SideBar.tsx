import { FiChrome } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="bg-[#FAFAFA] w-2/4 p-6 rounded-2xl border border-[#F4F4F5]">
      <p className="flex items-center gap-x-2 text-[#18181B] py-3">
        <FiChrome className="text-xl" />
        <span className="font-semibold text-base ">Profile</span>
      </p>
      <p className="flex items-center gap-x-2 text-[#A1A1AA]">
        <FiChrome className="text-xl" />
        <span className="font-semibold text-base ">Profile</span>
      </p>
    </div>
  );
};

export default SideBar;
