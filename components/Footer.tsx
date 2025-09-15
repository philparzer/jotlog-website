import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[200px] px-[5vw] flex flex-col items-center  lg:items-end lg:flex-row lg:justify-between pt-20 pb-10 lg:px-[25vw] bg-dim  text-offwhite relative">
                   <a href="https://www.producthunt.com/posts/jotlog?utm_source=badge-featured&utm_medium=badge&theme=dark&utm_souce=badge-jotlog" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425051&theme=light" alt="jotlog - fast&#0044;&#0032;privacy&#0032;focused&#0044;&#0032;and&#0032;always&#0032;offline&#0032;notes | Product Hunt" className="w-[180px] mb-10 lg:hidden lg:w-[210px]"  /></a>

      <ul className=" text-center lg:text-left flex flex-col gap-2 items-center">
      <li>
          <a className="hover:text-grape flex  items-center gap-2" href="https://github.com/philparzer/jotlog">
          <span className="underline">Github</span>
          </a>
        </li>
        <li>
          <a className="hover:text-grape flex items-center gap-2" href="https://apps.apple.com/app/jotlog/id6471736582?l=en-GB">
          <span className="underline">App Store</span> 
          </a>
        </li>
        <li>
          <a className="hover:text-grape flex items-center gap-2 " href="https://play.google.com/store/apps/details?id=com.philparzer.jotlog">
          <span className="underline">Google Play</span>
          </a>
        </li>
        <li>
          <a className="hover:text-grape underline" href="https://twitter.com/jotlog_app">
            X {"(Twitter)"}
          </a>
        </li>
        <li>
          <a className="hover:text-grape flex pointer-events-none items-center gap-2" href="https://www.producthunt.com/posts/jotlog">
          <span className="underline">Product Hunt</span>
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-center">
    
      
      <p className="mt-10 lg:mt-0 opacity-50 text-xs">
        this site doesn&apos;t track you {":)"}
      </p>
      <Link href="/privacy" className="underline hover:grape" >Privacy Policy</Link>
      </div>
      <a className="flex gap-2 items-center translate-y-2" href="https://adler.studio">
        by{" "}
        adler.studio
      </a>
    </footer>
  );
}
