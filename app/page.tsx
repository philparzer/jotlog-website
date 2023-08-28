import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[80px] lg:mt-[170px]">
      <section className="">
        <div className="flex w-full justify-between px-[5vw] lg:px-[25vw]">
          <h1 className="text-[45px] lg:text-[60px] leading-[119%] mb-8 lg:mb-5">
            notes
            <br />
            for movers
          </h1>
          <div className="hidden lg:block">
            <div className="w-[214px] h-[433px] absolute lg:rotate-[15deg] -translate-x-[12vw] -translate-y-[80px]">
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
        </div>

        <div className="flex items-center">
          <div className="w-[5vw] lg:w-[23vw] h-[3px] bg-grape mr-[2vw] mb-20 lg:mb-10"></div>
          <div>
            <div className="flex lg:hidden flex-col gap-2">
              <div className="flex ">
                <div className="flex">
                  <h3 className="p-5 bg-white h-full w-full flex items-center rounded-md ">
                    instant <br /> startup
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="col-span-2 flex w-full">
                    <h3 className="p-2 px-4 bg-white rounded-full ">
                      own your data
                    </h3>
                  </div>
                  <div className="flex">
                    <h3 className="p-2 px-4 bg-white rounded-full">
                      open source
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <h3 className="p-2 px-4 bg-white rounded-full">open source</h3>
                <div className="relative grow mt-7 ml-7">
                  <div className="w-[214px] h-[433px] absolute lg:rotate-[15deg] lg:-translate-x-[12vw] lg:-translate-y-[80px]">
                    <Image
                      alt="iphone frame"
                      className="object-contain"
                      src="/iphone-frame.webp"
                      fill
                    ></Image>
                  </div>
                  <div className="w-full h-full flex px-[2%] py-[2%] rounded-[20%] overflow-hidden">
                    <div className="bg-white w-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <h3 className="p-2 px-4 bg-white rounded-full">
                  offline first
                </h3>
              </div>
            </div>

            <div className="hidden lg:flex gap-2 flex-wrap">
              <div className="flex">
                <h3 className="p-5 bg-white h-full w-full flex items-center rounded-md ">
                  instant <br /> startup
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="col-span-2 flex w-full">
                  <h3 className="p-2 px-4 bg-white rounded-full ">
                    own your data
                  </h3>
                </div>
                <div className="flex">
                  <h3 className="p-2 px-4 bg-white rounded-full">
                    open source
                  </h3>
                </div>
                <div className="flex">
                  <h3 className="p-2 px-4 bg-white rounded-full">
                    offline first
                  </h3>
                </div>
                <div></div>
              </div>
              <div className="flex w-full">
                <h3 className="p-2 px-4 bg-white rounded-full">100% free</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
