import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-16 flex flex-wrap justify-between gap-y-16 w-4/5 mx-auto pt-[50px] pb-[150px]">
      <FooterColumn
        title="Socials"
        links={[
          { href: "https://x.com/bonkznft_", text: "Twitter (x)" },
          { href: "https://discord.gg/NJWPdSPhCM", text: "Discord" },
          { href: "https://www.instagram.com/bonkz___/", text: "Instagram" },
          { href: "https://www.tiktok.com/@bonkz___", text: "TikTok" },
        ]}
      />
      <FooterColumn
        title="Marketplaces"
        links={[
          {
            href: "https://magiceden.io/marketplace/bonkznft",
            text: "Magic Eden",
          },
          { href: "https://www.tensor.trade/trade/bonkznft", text: "Tensor" },
        ]}
      />
      <FooterColumn
        title="Applications"
        links={[
          { href: "https://reveal.bonkz.io/", text: "Reveal" },
          { href: "https://bonkz-the-game.io/", text: "Game" },
          { href: "https://bonkz-staking.io/", text: "Staking" },
          { href: "https://www.omni-store.io/bonkz", text: "Merch" },
          { href: "https://bonkz-claim.io/", text: "Burn" },
        ]}
      />
      <FooterColumn
        title="Rarity"
        links={[{ href: "https://howrare.is/bonkz", text: "HowRare" }]}
      />
      <FooterColumn
        title="Legal"
        links={[
          { href: "https://bonkz.io/privacy", text: "Privacy Policy" },
          { href: "https://bonkz.io/terms", text: "Terms of Use" },
        ]}
      />
    </div>
  );
};
