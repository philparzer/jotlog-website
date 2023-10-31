interface Props {
  title: string;
  bulletpoints: (string | React.ReactNode)[];
  tags: React.ReactNode[];
  asset: React.ReactNode;
  subline: string;
}

export default function ContentBlock({
  title,
  bulletpoints,
  tags,
  asset,
  subline,
}: Props) {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:gap-32 lg:items-center lg:max-w-[85vw] 2xl:max-w-[75vw]">
      <div>
        <ul className="ml-[5vw] lg:ml-[24vw] mb-4 flex gap-2">
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <div className="w-[5vw] lg:w-[23vw] h-[3px] bg-grape mr-[2vw]"></div>
          <h2 className="text-[30px] leading-[119%]">{title}</h2>
        </div>
        <ul className="ml-[7vw] lg:ml-[25vw] flex flex-col gap-2 mt-5 list-inside opacity-75">
          {bulletpoints.map((bulletpoint, i) => (
            <li className="fl" key={i}><span className="text-grape font-extrabold text-[25px]">{"— "}</span>{bulletpoint}</li>
          ))}
        </ul>
      </div>
      <div className="mt-16 px-[7vw]  lg:px-0 lg:py-32 lg:mt-36 flex flex-col lg:items-center gap-4">
        <div>{asset}</div>
      </div>
    </section>
  );
}
