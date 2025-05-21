import { Container } from "@/Container";
import { ArrowRignt } from "@/icons/arrow";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

export function Hero() {
  return (
    <div className="relative bg-[url('/bg.jpg')] bg-fixed bg-cover py-5 flex justify-center items-center">
      <div className="absolute inset-0 h-full w-full z-0 bg-radial from-gray-950/30 to-gray-950" />
      <a
        href="#about"
        className="absolute h-11/12 w-20  top-0 right-5 flex flex-col gap-3 justify-center items-center  animate-cBounce"
      >
        <p className="[writing-mode:vertical-rl] text-3xl text-gray-600 font-Wallpoet font-medium">
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

      <Container className="p-24 max-w-4xl flex gap-10 justify-center items-center z-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-200 text-xl">Photography Agency</p>
          <h1 className="text-5xl/tight font-semibold text-gray-200">
            Where Every Click Tells a Story
          </h1>
          <p className="text-lg text-gray-300">
            Photography is a art of capturing moments and expressing emotions
            through visual story telling.
          </p>
          <div className="relative mt-5 w-fit group">
            <div className="absolute inset-0 bg-lime-600 z-0 -translate-0.5 rounded-md group-hover:translate-0 transition-transform duration-150" />
            <a
              href="#"
              className="relative text-gray-100 bg-gray-900 px-5 py-2.5 rounded-md font-Sansation font-medium z-50 inline-flex items-center gap-3 translate-0.5 group-hover:translate-0 transition-transform duration-150"
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
        <div className="relative">
          <img
            src="https://placehold.co/500x650/transparent/F00"
            alt="Hero"
            className="absolute z-0 -traslate-x-5 -translate-y-5 rounded-sm border border-red-200"
          />
          <img
            src="https://placehold.co/500x650"
            alt="Hero"
            className="translate-x-5 traslate-y-5 rounded-sm z-20"
          />
        </div>
      </Container>
    </div>
  );
}
