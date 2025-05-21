import { Container } from "@/Container";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback } from "react";
import { cn } from "lib/utils";
import { ArrowRignt } from "@/icons/arrow";
import { MdArrowCircleLeft } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    // AutoScroll(),
  ]);

  const gotoNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    console.log("Clicked");
  }, [emblaApi]);

  const gotoPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    console.log("Clicked");
  }, [emblaApi]);
  return (
    <Container className="max-w-5xl flex flex-col justify-center  py-20 gap-3">
      <p className="text-sm font-medium tracking-wider font-Sansation text-lime-600">
        Testimonials
      </p>
      <div className="flex gap-5 w-full items-center justify-between">
        <h1 className="text-4xl font-medium">What Our Clients Say</h1>
        <div className="w-36 h-0.5 bg-gray-600" />
      </div>
      <div className="relative mt-10">
        <div className="absolute flex justify-between w-full h-full p-5 items-center z-50">
          <div
            onClick={gotoPrev}
            className="p-2 border-2 border-lime-900/50 rounded-full shadow-xl"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={gotoNext}
            className="p-2 border-2 border-lime-900/50 rounded-full shadow-xl"
          >
            <FaArrowRight />
          </div>
        </div>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex z-10">
            {/* <div className="absolute bg-red-200 w-full h-full"></div> */}
            {sliders.map((slider, index) => (
              <div
                className="relative min-w-0 [flex:0_0_100%] flex flex-col ml-1 z-20  justify-center items-center p-15 gap-5 bg-gray-800/20 rounded-xl"
                key={index}
              >
                {/* <AiOutlineTeam size={80} className="z-0 absolute" /> */}
                <p className="text-lg font-medium font-Sansation">
                  {slider.name}
                </p>
                <p className="text-center text-xl font-light relative">
                  {slider.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

const sliders = [
  {
    name: "Wade Warren",
    text: "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
    star: 4.5,
  },
  {
    name: "Jhon Doe",
    text: "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
    star: 4.5,
  },
  {
    name: "Jane Doe",
    text: "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
    star: 4.5,
  },
  {
    name: "RDJ",
    text: "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
    star: 4.5,
  },
  {
    name: "Chris Hamsworth",
    text: "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
    star: 4.5,
  },
  {
    name: "Wade",
    text: "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
    star: 4.5,
  },
];
