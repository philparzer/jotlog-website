import ContentBlock from "@/components/ContentBlock";
import Phone from "@/components/Phone";
import Tag from "@/components/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[80px] lg:mt-[200px]">
      <section className="min-h-[80vh]">
        <div className="flex w-full justify-between px-[5vw] lg:px-[25vw]">
          <h1 className="text-[45px] lg:text-[60px] leading-[119%] mb-8 lg:mb-5">
            notes
            <br />
            for movers
          </h1>
          <div className="hidden lg:block">
            <div className="w-[214px] h-[433px] absolute lg:rotate-[15deg] -translate-x-[12vw] -translate-y-[40px]">
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
                  <Tag titleString="own your data" />
                  <Tag titleString="open source" />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <Tag titleString="open source" />
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
      <div className="flex flex-col gap-">
        <ContentBlock
          title="just jot it down"
          tags={[
            <Tag key={0}
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
            "6 times faster startup than other apps",
            "1 tap on the icon, start typing",
            "hit send, close the app, and get back to work",
          ]}
          asset={
            <div className="flex   gap-4 relative">
              <Phone />
              <Phone />
              <Phone />
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
              <Phone />
              <div className="bg-red-200 w-[290px] h-[217px]"></div>
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
            "jotlog is open-source, and free as in free beer",
            <a key={0}
              href="https://github.com/sponsors/philparzer"
              className="underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              consider sponsoring if you like my work
            </a>,
          ]}
          asset={<div className="bg-red-200 w-[25vw] aspect-video"></div>}
          subline="fork the code, make it your own, or contribute to the project"
        ></ContentBlock>
      </div>
    </main>
  );
}
