import Image from "next/image";
import React from "react";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col w-full px-20 gap-y-6">
      <div className="flex justify-between w-full" id="title">
        <h1 className="text-[#18181B] font-bold text-2xl">Playgrounds</h1>
        <p className="text-[#71717A] text-base font-normal">See All</p>
      </div>
      <div id="playgrounds" className="grid grid-cols-2 gap-5">
        <div className="bg-[#FAFAFA] flex flex-1 p-4 rounded-lg border border-[#F4F4F5] gap-2">
          <div>
            <Image
              src="/website_data/html-5.png"
              alt="playground"
              width={34.97}
              height={40}
            />
          </div>
          <div id="card-details" className="flex w-full flex-col gap-2">
            <div className="flex  justify-between">
              <h2 className="text-lg font-semibold">Playground title</h2>
              <div className="h-4 w-4 rounded-full bg-white border border-[#E4E4E7]"></div>
            </div>
            <div className="flex items-center  text-sm text-[#71717A] font-normal">
              HTML/CSS &middot; 1 min ago
            </div>
            <div id="info" className=" w-full text-[#71717A]">
              <div className="flex gap-2 text-xs">
                <div id="users-images" className="flex">
                  <Image
                    src="/profile.jpeg"
                    alt="playground"
                    width={24}
                    height={24}
                    className="rounded-full aspect-square flex-grow-0"
                  />
                  <Image
                    src="/profile.jpeg"
                    alt="playground"
                    width={24}
                    height={24}
                    className="rounded-full aspect-square border border-[#FAFAFA] -ml-1 flex-grow-0"
                  />
                </div>
                <p className="font-light">
                  Shared with <span className="font-bold">Adam,Anna</span>.. +7
                  more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] flex flex-1 p-4 rounded-lg border border-[#F4F4F5]"></div>
        <div className="bg-[#FAFAFA] flex flex-1 p-4 rounded-lg border border-[#F4F4F5]"></div>
        <div className="bg-[#FAFAFA] flex flex-1 p-4 rounded-lg border border-[#F4F4F5]"></div>
      </div>
      <div className="bg-red-400 h-52"></div>
    </div>
  );
};

export default PortfolioPage;
