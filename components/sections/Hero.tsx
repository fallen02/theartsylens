import { Container } from "@/Container";
import HeroImg from "@/assets/hero.webp";
import { FcCompactCamera } from "react-icons/fc";

export function Hero() {
  return (
    <div className="relative   lg:bg-fixed bg-cover p-0 lg:py-5 flex justify-center items-center">
      <div className="absolute bg-[url('/img/bg.webp')] lg:bg-fixed bg-cover grayscale-100 inset-0 h-full w-full z-0 bg-radial from-gray-950/30 to-gray-950" />
      <div className="absolute  grayscale-100 inset-0 h-full w-full z-0 bg-radial from-gray-950/30 to-gray-950" />
      <a
        href="#about"
        className="absolute h-11/12 w-20  top-0 right-0 lg:right-5 flex flex-col gap-1 lg:gap-3 justify-center items-center  animate-cBounce"
      >
        <p className="[writing-mode:vertical-rl] text-2xl text-gray-600 font-Wallpoet font-medium">
          Scroll Down
        </p>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-gray-600 size-8"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16.01 12.8502L13.39 15.4702C12.62 16.2402 11.36 16.2402 10.59 15.4702L4.08002 8.9502" />
          <path d="M19.92 8.9502L18.88 9.9902" />
        </svg>
      </a>

      <Container className="px-10 lg:px-24 py-20 lg:py-24 max-w-4xl flex gap-10 justify-center items-center z-10">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <FcCompactCamera className="border border-lime-600 rounded-full p-0.5" />
            <p className="text-gray-200 text-xs lg:text-sm">
              Photography Agency
            </p>
          </div>
          <h1 className="text-4xl lg:text-5xl/tight font-semibold text-gray-200">
            Where Every Click Tells a Story
          </h1>
          <p className="text-xs lg:text-sm text-gray-300">
            Photography is a art of capturing moments and expressing emotions
            through visual story telling.
          </p>
          <div className="relative mt-2  lg:mt-5 w-fit group">
            <div className="absolute inset-0 bg-lime-600 z-0 -translate-0.5 rounded-md group-hover:translate-0 transition-transform duration-150" />
            <a
              href="#"
              className="relative text-gray-100 bg-gray-900 px-2.5 py-1.5 text-sm lg:text-lg lg:px-5 lg:py-2.5 rounded-md font-Sansation font-medium z-50 inline-flex items-center gap-3 translate-0.5 group-hover:translate-0 transition-transform duration-150"
            >
              Read More
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-rotate-45 stroke-gray-100 group-hover:rotate-0 transition-transform duration-150"
              >
                <path d="M14.43 5.92969L20.5 11.9997L14.43 18.0697" />
                <path d="M11.01 12H20.33" />
                <path d="M3.5 12H6.97" />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block ">
          {/* <div className="absolute inset-0 -traslate-x-5 -translate-y-5 rounded-sm border border-lime-600 backdrop-blur-lg" /> */}
          <img
            src={HeroImg}
            alt="Hero"
            className="absolute z-0 -traslate-x-5 -translate-y-5 rounded-sm border border-lime-600 grayscale-100 opacity-40 blur-[2px]"
          />

          {/* <div className="h-[650px] w-[500px] bg-red-400"></div> */}
          <img
            // src="https://placehold.co/500x650"
            src={HeroImg}
            alt="Hero"
            className="translate-x-5 traslate-y-5 rounded-sm z-20"
          />
        </div>
      </Container>
    </div>
  );
}
