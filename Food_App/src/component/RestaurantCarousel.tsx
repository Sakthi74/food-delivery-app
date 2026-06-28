import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import React from "react";
import carousel1 from "../assets/Images/restarunt/carousel1.jpg";
import carousel2 from "../assets/Images/restarunt/carousel1.jpg";
import carousel3 from "../assets/Images/restarunt/carousel1.jpg";
import carousel4 from "../assets/Images/restarunt/carousel1.jpg";

// import biriyani from "../assets/Images/allcatecories/Biryani.jpg";

const RestaurantCarousel = () => {
  return (
    <div>
      <Carousel className="relative w-full overflow-hidden">
        <CarouselPrevious className="z-2" />
        <CarouselContent>
          <CarouselItem>
            <img className=" w-[900px] h-[400px]" src={carousel1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img className=" w-72 h-[400px]" src={carousel2} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img className=" w-full h-[400px]" src={carousel3} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img className=" w-full h-[400px]" src={carousel4} alt="" />
          </CarouselItem>
        </CarouselContent>

        <CarouselNext className="bg-black ml-24"/>
      </Carousel>
    </div>
  );
};

export default RestaurantCarousel;
