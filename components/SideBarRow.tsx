import { FiChrome } from "react-icons/fi";

interface SideBarRowProps {
  name: string;
}

const SideBarRow = (props: SideBarRowProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[5px] h-8 rounded-r-3xl bg-black"></div>
      <p className="flex items-center gap-x-2 text-[#18181B] py-3">
        <FiChrome className="text-xl" />
        <span className="font-semibold text-base ">{props.name}</span>
      </p>
    </div>
  );
};

export default SideBarRow;
