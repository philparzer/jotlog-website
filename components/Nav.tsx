import Link from "next/link";

export default function Nav() {
    return (
        <nav className="nav mx-[25vw] bg-white mt-[20px] py-[20px] rounded-full flex items-center px-[25px] text-sm">
            <Link className="text-base" href="/">jotlog</Link>
            <div className="flex grow gap-6 justify-center">
                <a href="https://twitter.com/jotlog_app" rel="noopener noreferrer">x {"(twitter)"}</a>
                <a href="https://www.producthunt.com/" rel="noopener noreferrer">producthunt</a>
                <a href="https://github.com/philparzer/jotlog" rel="noopener noreferrer">github</a>
            </div>
            <div>
                <a href="https://twitter.com/jotlog_app" rel="noopener noreferrer" className="text-base px-[13px] py-[6px] bg-grape text-white rounded-md" >download</a>
            </div>
        </nav>
    )
}