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
    <section className="flex gap-32 items-center ">
      <div>
        <ul className="ml-[24vw] mb-4 flex gap-2">
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <div className="w-[5vw] lg:w-[23vw] h-[3px] bg-grape mr-[2vw]"></div>
          <h2 className="text-[30px] leading-[119%]">{title}</h2>
        </div>
        <ul className="ml-[25vw] flex flex-col gap-2 mt-[16px]">
          {bulletpoints.map((bulletpoint, i) => (
            <li key={i}>{bulletpoint}</li>
          ))}
        </ul>
      </div>
      <div className="py-32 mt-36 flex flex-col items-center gap-4">
        <div>{asset}</div>
        <p className="opacity-50 text-sm">{subline}</p>
      </div>
    </section>
  );
}
