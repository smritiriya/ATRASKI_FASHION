import React from "react";
import { img1, img11, img12, img13, img14, img15, img16, img2, img3, img4, img5, img6, img7 } from "../assets";
import ImageGallery from "./imagegallery";
// import ImageGallery from "./ImageGallery";



const NewBanner = () => {
  const images = [
    { url: img1, alt: "Image 1" },
    { url: img2, alt: "Image 2" },
    { url: img12, alt: "Image 9" },
    { url: img13, alt: "Image 10" },
    { url: img14, alt: "Image 11" },
    { url: img3, alt: "Image 3" },
    { url: img4, alt: "Image 4" },
    { url: img7, alt: "Image 7" },

    { url: img5, alt: "Image 5" },
    { url: img6, alt: "Image 6" },
    { url: img11, alt: "Image 8" },

    { url: img15, alt: "Image 12" },
    { url: img16, alt: "Image 12" },
  ];

  return <ImageGallery images={images} />;
};

export default NewBanner;
