'use client';

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define type for gallery item
type GalleryItem =
  | { type: "single"; src: string }
  | { type: "stacked"; src: string[] };

const ImageGallery = () => {
  const singleImages: string[] = ["/alrais1.jpg", "/alrais2.jpg", "/alrais5.jpg"];
  const stackedImages: string[][] = [
    ["/alrais3.jpg", "/alrais4.jpg"],
    ["/alrais6.jpg", "/alrais7.jpg"],
    ["/alrais8.jpg", "/alrais9.jpg"],
    ["/alrais10.jpg", "/alrais11.jpg"],
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  // Explicitly type the combinedImages array
  const combinedImages: GalleryItem[] = [];
  for (let i = 0; i < Math.max(singleImages.length, stackedImages.length); i++) {
    if (i < singleImages.length) {
      combinedImages.push({ type: "single", src: singleImages[i] });
    }
    if (i < stackedImages.length) {
      combinedImages.push({ type: "stacked", src: stackedImages[i] });
    }
  }

  return (
    <section className="bg-black pt-2 pb-10">
      <div className="w-full mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          arrows={false}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {combinedImages.map((item, index) => (
            <div key={index} className="p-2">
              {item.type === "single" ? (
                <img
                  src={item.src}
                  alt={`Single ${index + 1}`}
                  className="rounded-xl w-full h-[70vh] object-cover"
                />
              ) : (
                <div className="flex flex-col gap-4">
                  {item.src.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Stacked ${index}-${i}`}
                      className="rounded-xl w-full h-[35vh] object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ImageGallery;
