import Link from "next/link";

interface IAccordionProps {
  header?: string;
  title: string;
  bio?: string;
  content: {
    title: string;
    content: string;
    button?: {
      text?: string;
      link?: string;
    };
  }[];
}

const Accordion: React.FC<IAccordionProps> = ({
  title,
  content,
  header,
  bio,
}) => {
  return (
    <section className="flex flex-col space-y-3 py-10">
      {header && (
        <h3 className="text-md font-medium uppercase text-secondary">
          {header}
        </h3>
      )}
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      {bio && <p className="text-slate-600">{bio}</p>}
      <div className="flex flex-col space-y-10">
        {content &&
          content.map((child, index: number) => (
            <div
              key={index}
              className="flex flex-col border-2 border-l-0 border-r-0 border-b-0 border-t-secondary py-4"
            >
              <h1 className="text-xl font-bold text-white">{child.title}</h1>
              <p className="text-lg text-slate-600">{child.content}</p>
              {child.button && (
                <Link
                  className="w-32 rounded-full bg-accent p-2 text-center text-lg font-bold text-white"
                  href={child.button.link as string}
                >
                  {child.button.text}
                </Link>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Accordion;
