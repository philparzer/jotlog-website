import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Nav() {
  return (
    <nav className="pl-[2vw] top-[20px] text-[18px] sticky flex items-center z-50 ">
      <div className="flex items-center dark:bg-dim bg-white py-3 rounded-full gap-10 px-5">
      <Link className=" hover:text-grape" href="/">
        <span className="text-grape font-extrabold">— </span>jotlog
      </Link>
     
      <div className="flex items-center gap-4 ">
        <a
          href="https://twitter.com/jotlog_app"
          rel="noopener noreferrer"
          className="text-[18px] px-4 rounded-full  bg-grape  text-white py-1.5"
        >
          download
        </a>
        
        <div className=" h-full flex items-center">
          <Popover>
            <PopoverTrigger>
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-vanta dark:fill-offwhite"
                >
                  <circle cx="12.5" cy="4.5" r="2.5" />
                  <circle cx="12.5" cy="12.5" r="2.5" />
                  <circle cx="12.5" cy="20.5" r="2.5" />
                </svg>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-4">
                <a
                  className="hover:text-grape"
                  href="https://twitter.com/jotlog_app"
                  rel="noopener noreferrer"
                >
                  x {"(twitter)"}
                </a>
                <a
                  className="hover:text-grape"
                  href="https://www.producthunt.com/"
                  rel="noopener noreferrer"
                >
                  producthunt
                </a>
                <a
                  className="hover:text-grape"
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
      </div>
    </nav>
  );
}
