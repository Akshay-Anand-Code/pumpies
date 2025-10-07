import { ImageSlider } from "@/sections/ArtistsSection/components/ImageSlider";
import { ArtistControls } from "@/sections/ArtistsSection/components/ArtistControls";

export const ArtistGallery = () => {
  return (
    <section className="text-white box-border caret-transparent w-full">
      <ImageSlider />
      <ArtistControls />
    </section>
  );
};
