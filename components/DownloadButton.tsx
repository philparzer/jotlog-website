"use client"

import Link from "next/link";

interface DownloadButtonProps {

}

const DownloadButton = ({}: DownloadButtonProps) => {

    return (
        <div className="flex gap-2">
        <a

        href="https://play.google.com/store/apps/details?id=com.philparzer.jotlog"
        className={`text-[18px] relative px-3 rounded-[8px]  bg-grape hover:bg-vanta text-white py-0.5 pb-1`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-[14px]">Android</span>
      </a>
      <a
        href="https://apps.apple.com/app/jotlog/id6471736582?l=en-GB"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[18px] relative px-3 rounded-[8px]  bg-grape hover:bg-vanta text-white py-0.5 pb-1`}
      >
        <span className="text-[14px]">iOS</span>
      </a>
      </div>
    );
}

export default DownloadButton;