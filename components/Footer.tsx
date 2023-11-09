export default function Footer() {
  return (
    <footer className="mt-[200px] px-[5vw] flex flex-col items-center  lg:items-end lg:flex-row lg:justify-between pt-20 pb-10 lg:px-[25vw] bg-dim  text-offwhite relative">
      <ul className=" text-center lg:text-left flex flex-col gap-2">
      <li>
          <a className="hover:text-grape flex pointer-events-none items-center gap-2" href="https://github.com">
          <span className="opacity-50">Github</span> <span className="text-[12px] text-grape opacity-100">{"coming soon"}</span>
          </a>
        </li>
        <li>
          <a className="hover:text-grape flex pointer-events-none items-center gap-2" href="https://github.com">
          <span className="opacity-50">App Store</span> <span className="text-[12px] text-grape opacity-100">{"waiting for approval"}</span>
          </a>
        </li>
        <li>
          <a className="hover:text-grape pointer-events-none flex items-center gap-2 " href="https://github.com">
          <span className="opacity-50">Google Play</span> <span className="text-[12px] text-grape opacity-100">{"waiting for approval"}</span>
          </a>
        </li>
        <li>
          <a className="hover:text-grape underline" href="https://twitter.com/jotlog_app">
            X {"(Twitter)"}
          </a>
        </li>
        <li>
          <a className="hover:text-grape flex pointer-events-none items-center gap-2" href="https://github.com">
          <span className="opacity-50">Product Hunt</span> <span className="text-[12px] text-grape opacity-100">{"coming soon"}</span>
          </a>
        </li>
      </ul>
      <p className="mt-10 lg:mt-0 opacity-50 text-xs">
        this site doesn&apos;t track you {":)"}
      </p>
      <a className="flex gap-2 items-center translate-y-2" href="https://adlerlagune.com">
        by{" "}
        <img
          src="/100p.webp"
          alt="adlerlagune logo"
          className="relative inline h-[35px] w-[35px] -translate-y-1 "
        />
        with love
      </a>
    </footer>
  );
}
