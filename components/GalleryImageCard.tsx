import Image from "next/image";
import { TStaticImage } from "@/app/types";

// create props for image and alt
type GalleryImageCardProps = { image: TStaticImage; alt: string };

const GalleryImageCard = ({ image, alt }: GalleryImageCardProps) => {
  return (
    <>
      <div>
        <Image
          placeholder="blur"
          src={image}
          alt={alt}
          className="aspect-[14/13] select-none w-full drop-shadow-3xl object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default GalleryImageCard;
