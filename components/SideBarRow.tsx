import Link from "next/link";
import { useRouter } from "next/router";
import { FiChrome } from "react-icons/fi";

interface SideBarRowProps {
  name: string;
  url: string;
}

const SideBarRow = (props: SideBarRowProps) => {
  const router = useRouter();
  return (
    <Link href={props.url}>
      <div className="flex items-center gap-x-4">
        <div
          className={`w-[5px] h-8 rounded-r-3xl ${
            router.asPath == props.url ? "bg-black" : "bg-transparent"
          } `}
        ></div>
        <p
          className={`flex items-center gap-x-2 ${
            router.asPath == props.url ? "text-[#18181B] " : "text-gray-500"
          } py-3`}
        >
          <FiChrome className="text-xl" />
          <span className="font-semibold text-base ">{props.name}</span>
        </p>
      </div>
    </Link>
  );
};

export default SideBarRow;
