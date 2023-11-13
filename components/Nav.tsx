import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DownloadButton from "./DownloadButton";

export default function Nav() {
  return (
    <>
    <nav className="px-[2vw] top-[20px] text-[18px] sticky flex items-center z-50 lg:justify-between flex-wrap">
      <div className="flex items-center dark:bg-dim bg-white py-3 rounded-full gap-10 px-5 relative">
        <Link className=" hover:text-grape" href="/">
          <span className="text-grape font-extrabold">— </span>jotlog
        </Link>

        <div className="flex items-center gap-4 relative">
         <DownloadButton />

          <div className=" h-full flex items-center relative z-50">
            <Popover>
              <PopoverTrigger title="show social links">
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
                <div className="flex flex-col gap-4 ">
                  <a
                    className="hover:text-grape underline"
                    href="https://twitter.com/jotlog_app"
                    rel="noopener noreferrer"
                  >
                    x {"(twitter)"}
                  </a>
                  <a
                    className="hover:text-grape underline"
                    href="https://www.producthunt.com/posts/jotlog"
                    rel="noopener noreferrer"
                  >
                    producthunt
                  </a>
                  <a
                    className="hover:text-grape underline"
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
             <a href="https://www.producthunt.com/posts/jotlog?utm_source=badge-featured&utm_medium=badge&theme=dark&utm_souce=badge-jotlog" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425051&theme=light" alt="jotlog - fast&#0044;&#0032;privacy&#0032;focused&#0044;&#0032;and&#0032;always&#0032;offline&#0032;notes | Product Hunt" className="w-[180px] hidden lg:flex lg:w-[210px]"  /></a>
    </nav>
     
      </>
  );
}
