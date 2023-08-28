import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Nav() {
  return (
    <nav className="top-[20px] z-10 sticky w-full nav lg:w-auto lg:border lg:border-[#f8e4ff40] lg:shadow-nav px-[5vw] lg:mx-[25vw] lg:bg-white py-[16px] rounded-full flex justify-between lg:justify-normal items-center lg:px-[40px] text-sm">
      <Link className="text-base" href="/">
        jotlog
      </Link>
      <div className="hidden lg:flex grow gap-6 justify-center">
        <a href="https://twitter.com/jotlog_app" rel="noopener noreferrer">
          x {"(twitter)"}
        </a>
        <a href="https://www.producthunt.com/" rel="noopener noreferrer">
          producthunt
        </a>
        <a
          href="https://github.com/philparzer/jotlog"
          rel="noopener noreferrer"
        >
          github
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://twitter.com/jotlog_app"
          rel="noopener noreferrer"
          className="text-base px-[13px] py-[6px] bg-grape text-white rounded-md"
        >
          download
        </a>
        <div className="lg:hidden h-full flex items-center">
              <Popover>
                <PopoverTrigger>
                  <div className="">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="4.5" r="2.5" fill="black" />
                      <circle cx="12.5" cy="12.5" r="2.5" fill="black" />
                      <circle cx="12.5" cy="20.5" r="2.5" fill="black" />
                    </svg>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://twitter.com/jotlog_app"
                      rel="noopener noreferrer"
                    >
                      x {"(twitter)"}
                    </a>
                    <a
                      href="https://www.producthunt.com/"
                      rel="noopener noreferrer"
                    >
                      producthunt
                    </a>
                    <a
                      href="https://github.com/philparzer/jotlog"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
          </div>
        </div>
    </nav>
  );
}
