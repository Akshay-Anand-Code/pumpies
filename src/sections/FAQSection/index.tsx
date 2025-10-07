import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

export const FAQSection = () => {
  return (
    <div className="sticky bg-pink-300 box-border caret-transparent text-center w-full z-[-1] mt-[150px] pb-[150px] px-[2%] top-0 md:text-left md:px-[10%]">
      <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center pt-[150px] md:text-[100px] md:leading-[150px] md:text-left">
        FAQ
      </h1>
      <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 text-center w-full mt-[50px] md:text-left">
        <FAQItem question="Are BONKz Associated with $BONK?" />
        <FAQItem question="Where can I join the BONKz community?" />
        <div className="bg-black box-border caret-transparent h-0.5 opacity-45 text-center w-full md:text-left"></div>
      </div>
      <div className="box-border caret-transparent text-center md:text-left"></div>
    </div>
  );
};
