import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import type { CarouselApi } from "embla-carousel";

import image1 from "../assets/Images/favoritecarousel/img1.png";
import image2 from "../assets/Images/favoritecarousel/img2.png";
import image3 from "../assets/Images/favoritecarousel/img3.png";
import image4 from "../assets/Images/favoritecarousel/img4.png";

const slides = [
  {
    image: image1,
    title: "All your favorites",
    description:
      "Get all your loved foods in one place, you just place the order we do the rest",
  },
  {
    image: image2,
    title: "Fast Delivery",
    description:
      "We deliver your food in just a few minutes with live tracking.",
  },
  {
    image: image3,
    title: "Best Offers",
    description: "Enjoy exciting discounts and exclusive restaurant offers.",
  },
  {
    image: image4,
    title: "Easy Payment",
    description: "Pay securely using cards, wallets or cash on delivery.",
  },
];

function FavoriteCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div>
      <div className="w-full max-w-sm mx-auto">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center px-6">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-64 object-contain"
                  />

                  <h2 className="mt-8 text-2xl font-bold text-center">
                    {slide.title}
                  </h2>

                  <p className="mt-3 text-center text-gray-500">
                    {slide.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-6 h-2 bg-orange-500"
                  : "w-2 h-2 bg-orange-200"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-[10px]">
        <div className="text-center mt-[10px]">
          <button className="px-[125px] py-[10px] rounded-2xl bg-[#FF7622]">NEXT</button>
        </div>
        <div className="text-center mt-[10px]">
          <button>skip</button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCarousel;
