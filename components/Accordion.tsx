import Link from "next/link";

interface IAccordionProps {
  header?: string;
  title?: string;
  bio?: string;
  content: {
    title: string;
    content: string;
    button?: {
      text?: string;
      onClick?: () => void;
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
      { title && (
        <h1 className="text-5xl font-bold">{title}</h1>
      )}
      {bio && <p className="text-slate-600">{bio}</p>}
      <div className="flex flex-col t-0 space-y-10">
        {content &&
          content.map((child, index: number) => (
            <div
              key={index}
              className="flex flex-col border-2 border-l-0 border-r-0 border-b-0 border-t-secondary py-4"
            >
              <h1 className="text-2xl font-bold">{child.title}</h1>
              <p className="text-lg text-gray-300">{child.content}</p>
              {child.button && (
                <button
                  className="w-32 rounded-full bg-accent p-2 text-center text-lg font-bold text-white"
                  onClick={child.button.onClick}
                >
                  {child.button.text}
                </button>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Accordion;
