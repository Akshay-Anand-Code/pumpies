import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <div className="bg-pink-300 box-border caret-transparent">
      <div className="bg-yellow-200 box-border caret-transparent -mt-2.5 pt-[150px] rounded-t-[30px] md:pt-[300px] md:rounded-t-[100px]">
        <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center ml-0 pb-[50px] md:text-[100px] md:leading-[150px] md:text-left md:ml-[10%] md:pb-0">
          BONKz
        </h1>
      </div>
      <div className="bg-zinc-900 box-border caret-transparent">
        <FooterContent />
        <FooterBottom />
      </div>
    </div>
  );
};
