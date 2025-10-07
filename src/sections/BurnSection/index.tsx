import { BurnCounter } from "@/sections/BurnSection/components/BurnCounter";

export const BurnSection = () => {
  return (
    <div className="relative bg-yellow-200 box-border caret-transparent hidden h-[1000px] w-screen overflow-hidden">
      <div className="box-border caret-transparent h-full w-full">
        <img
          alt="Flame Burn Section"
          src="https://c.animaapp.com/mgg4tism1dKXdt/assets/50.png"
          className="text-transparent aspect-[auto_864_/_887] box-border h-[33.3333%] max-w-full mt-[50px] mx-auto md:h-2/5"
        />
        <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center md:text-[100px] md:leading-[150px]">
          BONKz Burn
        </h1>
        <p className="text-base font-[510] box-border caret-transparent leading-6 text-center w-[70%] mt-5 mx-auto md:text-xl md:leading-[30px]">
          In the spirit of $BONK all of the funds raised during the mint were
          burned, reducing the supply thus making the token more valuable in
          theory. Since launch we have burned millions of US dollars worth of
          $BONK, putting a larger dent into the burning movement than any of the
          projects before us combined.
        </p>
        <BurnCounter />
      </div>
      <div className="sticky bg-pink-300 box-border caret-transparent text-center w-full z-[-1] mt-[150px] pb-[150px] px-[2%] top-0 md:text-left md:px-[10%]">
        <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center pt-[150px] md:text-[100px] md:leading-[150px] md:text-left">
          FAQ
        </h1>
        <div className="box-border caret-transparent gap-x-5 flex flex-col gap-y-5 text-center w-full mt-[50px] md:text-left">
          <div className="box-border caret-transparent opacity-45 text-center w-full pt-[30px] border-t-2 border-solid md:text-left">
            <div className="items-center box-border caret-transparent flex justify-center text-center md:justify-between md:text-left">
              <h1 className="text-lg font-bold box-border caret-transparent leading-[27px] text-center md:text-[39px] md:leading-[58.5px] md:text-left">
                Are BONKz Associated with $BONK?
              </h1>
              <img
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent hidden h-[25px] text-center w-6 md:block md:text-left"
              />
            </div>
          </div>
          <div className="box-border caret-transparent opacity-45 text-center w-full pt-[30px] border-t-2 border-solid md:text-left">
            <div className="items-center box-border caret-transparent flex justify-center text-center md:justify-between md:text-left">
              <h1 className="text-lg font-bold box-border caret-transparent leading-[27px] text-center md:text-[39px] md:leading-[58.5px] md:text-left">
                Where can I join the BONKz community?
              </h1>
              <img
                src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent hidden h-[25px] text-center w-6 md:block md:text-left"
              />
            </div>
          </div>
          <div className="bg-black box-border caret-transparent h-0.5 opacity-45 text-center w-full md:text-left"></div>
        </div>
        <div className="box-border caret-transparent text-center md:text-left"></div>
      </div>
      <div className="bg-pink-300 box-border caret-transparent">
        <div className="bg-yellow-200 box-border caret-transparent -mt-2.5 pt-[150px] rounded-t-[30px] md:pt-[300px] md:rounded-t-[100px]">
          <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center ml-0 pb-[50px] md:text-[100px] md:leading-[150px] md:text-left md:ml-[10%] md:pb-0">
            BONKz
          </h1>
        </div>
        <div className="bg-zinc-900 box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-16 flex flex-wrap justify-between gap-y-16 w-4/5 mx-auto pt-[50px] pb-[150px]">
            <div className="text-yellow-200 box-border caret-transparent flex flex-col">
              <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                Socials
              </p>
              <a
                href="https://x.com/bonkznft_"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Twitter (x)
              </a>
              <a
                href="https://discord.gg/NJWPdSPhCM"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Discord
              </a>
              <a
                href="https://www.instagram.com/bonkz___/"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@bonkz___"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                TikTok
              </a>
            </div>
            <div className="text-yellow-200 box-border caret-transparent flex flex-col">
              <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                Marketplaces
              </p>
              <a
                href="https://magiceden.io/marketplace/bonkznft"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Magic Eden
              </a>
              <a
                href="https://www.tensor.trade/trade/bonkznft"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Tensor
              </a>
            </div>
            <div className="text-yellow-200 box-border caret-transparent flex flex-col">
              <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                Applications
              </p>
              <a
                href="https://reveal.bonkz.io/"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Reveal
              </a>
              <a
                href="https://bonkz-the-game.io/"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Game
              </a>
              <a
                href="https://bonkz-staking.io/"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Staking
              </a>
              <a
                href="https://www.omni-store.io/bonkz"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Merch
              </a>
              <a
                href="https://bonkz-claim.io/"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Burn
              </a>
            </div>
            <div className="text-yellow-200 box-border caret-transparent flex flex-col">
              <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                Rarity
              </p>
              <a
                href="https://howrare.is/bonkz"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                HowRare
              </a>
            </div>
            <div className="text-yellow-200 box-border caret-transparent flex flex-col">
              <p className="text-lg font-bold box-border caret-transparent leading-[27px] mb-[30px]">
                Legal
              </p>
              <a
                href="https://bonkz.io/privacy"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Privacy Policy
              </a>
              <a
                href="https://bonkz.io/terms"
                className="font-[210] box-border caret-transparent block mb-4"
              >
                Terms of Use
              </a>
            </div>
          </div>
          <div className="text-yellow-200 box-border caret-transparent flex justify-between pb-[50px] px-[50px]">
            <p className="font-[210] box-border caret-transparent">
              Designed by OMNI
            </p>
            <p className="font-[210] box-border caret-transparent">
              ©BONKz 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
