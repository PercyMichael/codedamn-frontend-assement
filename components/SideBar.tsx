import SideBarRow from "./SideBarRow";

const SideBar = () => {
  return (
    <div className=" w-2/4">
      <div className="bg-[#FAFAFA] w-full py-6 rounded-2xl border border-[#F4F4F5]">
        <SideBarRow name="Profile" />
        <SideBarRow name="Profile" />
      </div>
    </div>
  );
};

export default SideBar;
