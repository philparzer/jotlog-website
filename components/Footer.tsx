export default function Footer() {
    return (
        <footer className="mt-[200px] px-[5vw] flex flex-col items-center lg:block pt-20 pb-10 lg:px-[25vw] bg-dim  text-offwhite relative">
            <ul className="underline text-center lg:text-left flex flex-col gap-2">
                <li><a className="hover:text-grape underline" href="https://github.com" >Github</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >App Store</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >Google Play</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >X {"(Twitter)"}</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >Producthunt</a></li>
            </ul>
            <p className="mt-10">this site doesn&apos;t track you {":)"}</p>
        </footer>
    )
}