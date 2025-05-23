import { Container } from "@/Container";
import { FaWhatsapp } from "react-icons/fa6";

export function CTA() {
  return (
    <Container className="relative max-w-5xl py-5 lg:py-10 ">
      <div className="relative py-5 lg:py-10 px-5 lg:px-15 bg-lime-500 z-50 overflow-hidden rounded">
        <div className="p-20  absolute bg-green-900 rotate-45 z-0 -top-30 right-10 rounded-2xl" />
        <div className="p-20  absolute bg-lime-600 rotate-45 z-0 -top-25 -right-10 rounded-2xl" />
        <div className="relative flex justify-between items-center z-50">
          <div className="flex flex-col gap-3">
            <h1 className="isolate text-4xl lg:text-5xl font-bold text-gray-950 font-Sansation z-50">
              Get In Touch
            </h1>
            <div className="relative mt-5 w-fit group">
              <div className="absolute inset-0 border border-lime-600 z-0 -translate-1 rounded-md group-hover:translate-0 transition-transform duration-150" />
              <a
                href="#"
                className="relative text-gray-100 bg-gray-900 px-5 py-2.5 rounded-md text-base font-Sansation font-medium z-50 inline-flex gap-3 translate-1 group-hover:translate-0 transition-transform duration-150 items-center"
              >
                Contact Now
              </a>
            </div>
          </div>
          <FaWhatsapp
            className="fill-gray-900 stroke-2 hidden lg:block"
            size={80}
          />
        </div>
      </div>
    </Container>
  );
}
