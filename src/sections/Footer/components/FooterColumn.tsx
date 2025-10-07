export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="text-yellow-200 box-border caret-transparent flex flex-col">
      <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
        {props.title}
      </p>
      {props.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="font-[210] box-border caret-transparent block mb-4"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};
