import Image from "next/image";

export default function Phone () {
    return (
        <div className="relative w-[119px] h-[242px]">
                <div className="w-full h-full absolute">
                  <Image
                    alt="iphone frame"
                    className="object-contain"
                    src="/iphone-frame.webp"
                    fill
                  ></Image>
                  <div className="w-full h-full flex px-[2%] py-[2%] rounded-[20%] overflow-hidden">
                    <div className="bg-white w-full"></div>
                  </div>
                </div>
              </div>
    )
}