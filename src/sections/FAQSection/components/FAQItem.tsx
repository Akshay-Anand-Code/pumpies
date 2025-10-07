export type FAQItemProps = {
  question: string;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div className="box-border caret-transparent opacity-45 text-center w-full pt-[30px] border-t-2 border-solid md:text-left">
      <div className="items-center box-border caret-transparent flex justify-center text-center md:justify-between md:text-left">
        <h1 className="text-lg font-bold box-border caret-transparent leading-[27px] text-center md:text-[39px] md:leading-[58.5px] md:text-left">
          {props.question}
        </h1>
        <img
          src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent hidden h-[25px] text-center w-6 md:block md:text-left"
        />
      </div>
    </div>
  );
};
