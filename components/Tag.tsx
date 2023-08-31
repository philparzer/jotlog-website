interface TitleStringProps {
  titleString: string;
  titleNode?: never;
}
interface TitleNodeProps {
  titleString?: never;
  titleNode: React.ReactNode;
}

export default function Tag({
  titleString,
  titleNode,
}: TitleStringProps | TitleNodeProps) {
  return (
    <div className="flex">
      {titleString ? (
        <h3 className="p-2 px-4 bg-white dark:bg-dim rounded-full">{titleString}</h3>
      ) : (
        <h3 className="p-5 bg-white dark:bg-dim flex items-center rounded-md ">
          {titleNode}
        </h3>
      )}
    </div>
  );
}
