export default function Footer() {
    return (
        <footer className="mt-[200px] px-[5vw] flex flex-col items-center lg:block py-20 lg:px-[25vw] bg-[#2E2A2D] text-white relative">
            <ul className="underline text-center lg:text-left">
                <li>Github</li>
                <li>Appstore</li>
                <li>Google Play</li>
                <li>X {"(Twitter)"}</li>
                <li>Producthunt</li>
            </ul>
            <p className="mt-10">this site doesn&apos;t track you {":)"}</p>

        </footer>
    )
}