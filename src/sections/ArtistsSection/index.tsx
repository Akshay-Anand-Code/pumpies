import { ArtistGallery } from "@/sections/ArtistsSection/components/ArtistGallery";

export const ArtistsSection = () => {
  return (
    <div className="box-border caret-transparent mt-[10%] mb-[200px]">
      <h1 className="text-yellow-50 text-[49px] font-bold box-border caret-transparent leading-[73.5px] text-center w-full mt-5 md:text-[100px] md:leading-[150px]">
        1/1 Artists
      </h1>
      <p className="text-yellow-50 text-lg font-[510] box-border caret-transparent leading-[27px] opacity-[0.76] text-center w-[90%] mt-[4%] mx-auto md:text-[23px] md:leading-[34.5px] md:w-2/5">
        When creating the BONKz collection we wanted to showcase the incredible
        artistic talent we have on Solana. The collection includes 93 1/1 BONKz,
        all hand drawn by Solana’s most gifted independent artists. We’d like to
        thank each and every one of them for their contribution to the
        collection and we invite you to explore and appreciate their work below.
      </p>
      <ArtistGallery />
    </div>
  );
};
