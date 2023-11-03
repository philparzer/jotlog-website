import Image from "next/image";

interface PhoneProps {
  children?: React.ReactNode;
}

export default function Phone ({children}: PhoneProps) {
    return (
        <div className="relative w-[81px] h-[164px] lg:w-[119px] z-10 lg:h-[242px]">
                <div className="w-full h-full absolute">
                  <Image
                    alt="iphone frame"
                    className="object-contain"
                    src="/iphone-frame.webp"
                    fill
                  ></Image>
                  <div className="w-full h-full flex px-[5%] py-[4%] rounded-[20%] overflow-hidden">
                    <div className="bg-white h-full w-full overflow-hidden">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
    )
}