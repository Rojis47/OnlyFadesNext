// import { useState, useEffect } from "react";
// import { Blurhash } from "react-blurhash";
import Image from "next/image";

const GalleryImageCard = ({ image, alt }) => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoaded(true);
  //   };
  //   img.src = image;
  // }, [image]);

  return (
    <>
      {/* <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash="hFCZz=o{J2%0E0S4aeadyZv-nLI]V?t7X7ob02H@xHSkr^s=jKofZfE1Ot?GofbbafWCIA-;%hI.slWTR%R*"
          width={150}
          height={150}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="rounded-xl"
        />
      </div> */}
      {/*  style={{ display: !imageLoaded ? "none" : "inline" }} */}

      <div>
        <Image
          src={image}
          alt={alt}
          className="aspect-[14/13] select-none w-full drop-shadow-3xl object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default GalleryImageCard;
