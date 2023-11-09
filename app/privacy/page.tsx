interface PageProps {

}

const Page = ({}: PageProps) => {
    return (
        <main className="mt-[80px] lg:mt-[200px] 2xl:mt-[300px] overflow-hidden min-h-[100vh]">
              <div className="flex w-full justify-between px-[5vw] lg:px-[25vw] flex-col">
            <h1 className="text-[30px] leading-[119%]">Privacy</h1>
            <p>we don&apos;t collect anything.</p>
            </div>
        </main>
    );
}

export default Page;