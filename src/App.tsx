import React from "react";
import { Header } from "./sections/Header";

export const App = () => {
  return (
    <div className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-zinc-900 box-border caret-transparent block h-fit tracking-[normal] leading-6 list-outside list-disc w-full overflow-x-hidden overflow-y-auto text-start indent-[0px] normal-case visible border-separate font-font_74c027">
      <Header />
      <div className="box-border caret-transparent"></div>
      <div className="absolute box-border caret-transparent block"></div>
    </div>
  );
};
