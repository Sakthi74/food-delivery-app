import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import carousel1 from "../../assets/Images/restarunt/carousel1.jpg";
import carousel2 from "../../assets/Images/restarunt/carousel2.jpg";
import carousel3 from "../../assets/Images/restarunt/carousel3.jpg";
import carousel4 from "../../assets/Images/restarunt/carousel4.jpg";



export default function Carousels() {
  return (
    <div className="relative p-[20px] w-full">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <img
              src={carousel2}
              alt="Carousel 1"
              className="w-full h-[300px] rounded-t-[20px] object-cover"
            />
          </CarouselItem>

          <CarouselItem>
            <img
              src={carousel1}
              alt="Carousel 2"
              className="w-full rounded-t-[20px] h-[300px] object-cover"
            />
          </CarouselItem>

          <CarouselItem>
            <img
              src={carousel3}
              alt="Carousel 3"
              className="w-full rounded-t-[20px] h-[300px] object-cover"
            />
          </CarouselItem>

          <CarouselItem>
            <img
              src={carousel4}
              alt="Carousel 4"
              className="w-full rounded-t-[20px] h-[300px] object-cover"
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white" />
      </Carousel>

      {/* Top Overlay Icons */}
      <div className="absolute top-6 m-[20px] left-0 right-0 flex justify-between px-6 z-20">
        <button className="p-3 bg-white rounded-full shadow">
          <MdKeyboardArrowLeft size={22} />
        </button>

        <button className="p-3 bg-white rounded-full shadow">
          <BsThreeDots size={22} />
        </button>
      </div>
    </div>
  );
}
