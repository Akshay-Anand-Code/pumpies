export const ContentInfo = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent flex flex-col w-[90%] m-[5%] md:items-start md:m-[3%]">
      <h1 className="text-2xl font-bold box-border caret-transparent leading-9 text-center md:text-[39px] md:leading-[58.5px]">
        PUMPIES Content
      </h1>
      <p className="text-base font-bold box-border caret-transparent leading-6 opacity-[0.76] text-center my-[5%] md:text-xl md:leading-[30px] md:text-left">
        <span className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left">
          Is content your thing?
          <br className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left" />
          <br className="text-base box-border caret-transparent leading-6 text-center md:text-xl md:leading-[30px] md:text-left" />
          If so, visit our
          <a
            href="https://www.instagram.com/bonkz___/'"
            className="text-black text-base box-border caret-transparent leading-6 text-center underline md:text-xl md:leading-[30px] md:text-left"
          >
            Instagram
          </a>
          or
          <a
            href="https://www.tiktok.com/@bonkz___"
            className="text-black text-base box-border caret-transparent leading-6 text-center underline md:text-xl md:leading-[30px] md:text-left"
          >
            TikTok
          </a>
          where we post weekly, feel good content for you to enjoy by yourself
          or share with your loved ones.
        </span>
      </p>
      <button className="text-xl font-bold bg-pink-300 caret-transparent hidden h-14 leading-7 text-center w-[272px] mx-auto p-0 md:ml-0">
        PUMPIES Game
      </button>
    </div>
  );
};
