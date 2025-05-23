import { Container } from "@/Container";
import { FaCheck } from "react-icons/fa6";

const usSec = [
  "Professional tools and tech",
  "Professionally trained photographers",
  "We offer excellence being affordable",
];
export function AboutUs() {
  return (
    <Container
      id="about"
      className="flex justify-center items-center py-10 lg:py-20"
    >
      <div className="flex flex-col gap-3 justify-center w-5xl">
        <p className="text-xs lg:text-sm font-medium text-lime-600 font-Sansation">
          Who we are?
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 justify-center">
          <div className="max-w-full lg:max-w-2/3 flex flex-col gap-1 lg:gap-4">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              Framing the World One Shot at a Time
            </h1>
          </div>
          <div className="max-w-full lg:max-w-1/3 flex flex-col  justify-between">
            <div className="hidden lg:block h-[2px] w-2/3 bg-gray-600 self-end" />
            <p className="text-xs text">
              Photography is the art of capturing moments and expressing
              emotions through visual storytelling and it involves skillfully
              using cameras, lenses and editing tools to create.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 py-5 lg:py-10 px-1 lg:px-5 justify-between">
          <div className="w-full lg:w-1/3 flex flex-col gap-5">
            <h1 className="text-sm lg:text-lg">
              At <span>Artsy Lens</span>, we believe that every moment is worth
              capturing
            </h1>
            <div className="flex flex-col gap-1 lg:gap-3">
              {usSec.map((sec, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <div className="bg-green-600 rounded-full p-0.5">
                    <FaCheck size={10} />
                  </div>
                  <p className="text-xs lg:text-sm">{sec}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-1 lg:mt-5 w-fit group">
              <div className="absolute inset-0 border border-lime-600 z-0 -translate-1 rounded-md group-hover:translate-0 transition-transform duration-150" />
              <a
                href="#"
                className="relative text-sm lg:text-lg text-gray-100 bg-gray-900 px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-md font-Sansation font-medium z-50 inline-flex gap-3 translate-1 group-hover:translate-0 transition-transform duration-150 items-center"
              >
                Contact
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-rotate-45 size-4 lg:size-6  stroke-gray-100 group-hover:rotate-0 transition-transform duration-150"
                >
                  <path d="M14.43 5.92969L20.5 11.9997L14.43 18.0697" />
                  <path d="M11.01 12H20.33" />
                  <path d="M3.5 12H6.97" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative w-full h-30 lg:h-auto lg:w-2/3 bg-[url('https://placehold.co/600x150')] bg-center bg-cover rounded-xl">
            <div className="absolute bg-lime-600 bottom-3 right-3 px-3 lg:px-5 py-0.5 lg:py-1 flex justify-center items-center gap-1 rounded-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold font-Sansation text-gray-950">
                5
                <span className="[-webkit-text-stroke:_1px_#030712] text-transparent text-5xl lg:text-7xl">
                  +
                </span>
              </h1>
              <span className="text-xs lg:text-sm text-gray-950">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
