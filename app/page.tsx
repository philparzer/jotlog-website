import ContentBlock from "@/components/ContentBlock";
import LazyVideo from "@/components/LazyVideo";
import Phone from "@/components/Phone";
import SpeedComparison from "@/components/SpeedComparison";
import Tag from "@/components/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[80px] lg:mt-[200px] 2xl:mt-[250px] overflow-hidden">
      <section className="min-h-[700px] lg:min-h-[60vh]">
        <div className="flex w-full justify-between px-[5vw] lg:px-[25vw]">
          <h1 className="text-[45px] lg:text-[60px] leading-[119%] mb-8 lg:mb-5">
            <span>notes</span>
            <br />
            for movers
          </h1>
          <div className="hidden lg:inline-block">
            <div className="w-[183px] h-[371px] lg:w-[214px] lg:h-[433px] absolute lg:rotate-[15deg] -translate-x-[12vw] 2xl:-translate-x-[18vw] -translate-y-[40px]">
              <Image
                alt="iphone frame"
                className="object-contain  animate-float z-10"
                src="/iphone-frame.webp"
                fill
              ></Image>
              <div className="w-full h-full flex px-[2%] py-[2%] rounded-[20%] overflow-hidden  animate-float ">
                <div className="bg-white w-full">
                  <video
                    className=" w-full h-[98.5%] "
                    src="header.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="w-[5vw] lg:w-[23vw] h-[3px] bg-grape mr-[2vw] mb-20 lg:mb-10"></div>
          <div>
            <div className="flex lg:hidden flex-col gap-2">
              <div className="flex ">
                <Tag
                  titleNode={
                    <span>
                      instant
                      <br />
                      startup
                    </span>
                  }
                />
                <div className="flex flex-wrap gap-2 pl-2">
                  <div className="w-full">
                    <Tag titleString="own your data" />
                  </div>
                  <div>
                    <Tag titleString="open source" />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <Tag titleString="100% free" />
                <div className="relative grow mt-3 ml-3">
                  <div className="w-[183px] h-[371px] absolute lg:rotate-[15deg] lg:-translate-x-[12vw] lg:-translate-y-[80px]">
                    <Image
                      alt="iphone frame"
                      className="object-contain"
                      src="/iphone-frame.webp"
                      fill
                    ></Image>
                    <div className="w-full h-full flex px-[2%] py-[2%] rounded-[20%] overflow-hidden">
                      <div className="bg-white w-full">
                        <video
                          className=" w-full h-[98.5%]"
                          src="header.mp4"
                          autoPlay
                          loop
                          playsInline
                          muted
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Tag titleString="offline first" />
            </div>

            <div className="hidden lg:flex gap-2 flex-wrap">
              <Tag
                titleNode={
                  <span>
                    instant
                    <br />
                    startup
                  </span>
                }
              />
              <div className="flex flex-wrap gap-2">
                <div className="col-span-2 flex w-full">
                  <Tag titleString="own your data" />
                </div>
                <div className="flex">
                  <Tag titleString="open source" />
                </div>
                <div className="flex">
                  <Tag titleString="offline first" />
                </div>
                <div></div>
              </div>
              <div className="flex w-full">
                <Tag titleString="100% free" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-40 lg:gap-0">
        <ContentBlock
          title="just jot it down"
          tags={[
            <Tag
              key={0}
              titleNode={
                <span>
                  instant
                  <br />
                  startup
                </span>
              }
            />,
          ]}
          bulletpoints={[
            "significantly  faster startup than other apps",
            "1 tap on the icon, start typing",
            "hit send, close the app, and get back to work",
          ]}
          asset={
            <div className="flex gap-4 relative">
              <SpeedComparison />
            </div>
          }
          subline="sometimes the best ideas come in the most inconvenient moments"
        ></ContentBlock>
        <ContentBlock
          title="you've got mail"
          tags={[
            <Tag key={0} titleString="offline first" />,
            <Tag key={1} titleString="own your data" />,
          ]}
          bulletpoints={[
            "jotlog never connects to the internet",
            "export your notes to your email inbox",
          ]}
          asset={
            <div className="flex gap-4 relative items-center">
              <Phone>
                <LazyVideo src="backup.mp4" height={99.5} loop />
              </Phone>
              <div className="bg-slate-300 aspect-[4/3] w-[50vw] lg:w-[290px] lg:h-[217px] relative overflow-hidden rounded-[8px] hover:scale-150 transition-transform hover:z-40">
                <Image
                  src="/email-client.png"
                  className="object-cover h-full w-full"
                  width={974}
                  height={712}
                  alt="email client with backed up note"
                />
              </div>
            </div>
          }
          subline="your notes stay with you, on your phone or in your inbox"
        ></ContentBlock>

        <ContentBlock
          title="safe, open, and free"
          tags={[
            <Tag key={0} titleString="open source" />,
            <Tag key={1} titleString="100% free" />,
          ]}
          bulletpoints={[
            <span key={1} className="relative">jotlog is <a className="underline hover:text-grape" href="https://github.com/philparzer/jotlog" target="_blank" rel="noopener noreferrer">open source</a></span>,
            <a
              key={0}
              href="https://github.com/sponsors/philparzer"
              className="underline hover:text-grape"
              rel="noopener noreferrer"
              target="_blank"
            >
              consider sponsoring
              
            </a>
          ]}
          asset={
            <div key={2} className="bg-slate-300 w-[75vw] lg:w-[25vw] max-w-[500px] aspect-[4/3] relative rounded-xl overflow-hidden hover:scale-150 transition-transform hover:z-40">
              <Image
                src="/github.png"
                className="object-cover h-full w-full"
                width={974}
                height={712}
                alt="github repo"
              />
            </div>
          }
          subline="fork the code, make it your own, or contribute to the project"
        ></ContentBlock>
      </div>
    </main>
  );
}
