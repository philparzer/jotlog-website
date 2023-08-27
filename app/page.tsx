export default function Home() {
  return (
    <main className="flex mt-[25vh]">
      <section>
        <h1 className="ml-[25vw] lg:text-[60px] leading-[119%] mb-5">
          notes
          <br />
          for movers
        </h1>

        <div className="flex items-center">
          <div className="w-[23vw] h-[3px] bg-grape mr-[2vw]"></div>
          <div>
            <div className="flex gap-2 flex-wrap">
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
