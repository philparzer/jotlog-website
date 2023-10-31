export default function Footer() {
    return (
        <footer className="mt-[200px] px-[5vw] flex flex-col items-center lg:grid lg:grid-cols-3 lg:place-items-center lg:items-end lg:flex-row lg:justify-between pt-20 pb-10 lg:px-[25vw] bg-dim  text-offwhite relative">
            <ul className="underline text-center lg:text-left flex flex-col gap-2">
                <li><a className="hover:text-grape underline" href="https://github.com" >Github</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >App Store</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >Google Play</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >X {"(Twitter)"}</a></li>
                <li><a className="hover:text-grape underline" href="https://github.com" >Producthunt</a></li>
            </ul>
            <p className="mt-10 lg:mt-0 opacity-50">this site doesn&apos;t track you {":)"}</p>
            <a className="underline" href="https://adlerlagune.com">by adlerlagune, with love</a>
        </footer>
    )
}