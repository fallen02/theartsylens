import { Container } from "@/Container";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

export function Footer() {
  return (
    <div className="bg-gray-800/50 py-10 lg:py-20 flex flex-col  gap-10">
      <Container className="max-w-5xl flex flex-col gap-10">
        <div className="w-full flex flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-5">
            <h1 className="font-Sansation font-bold text-2xl tracking-wider">
              The Artsy Lens
            </h1>
            <p className="text-xl  lg:text-3xl font-bold">
              Lets Head Into The Future
            </p>
            <div className="relative mt-5 w-fit group">
              <div className="absolute inset-0 border border-lime-600 z-0 -translate-1 rounded-md group-hover:translate-0 transition-transform duration-150" />
              <a
                href="#"
                className="relative text-sm lg:text-lg text-gray-100 bg-gray-950 px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-md  font-Sansation font-medium z-50 inline-flex gap-3 translate-1 group-hover:translate-0 transition-transform duration-150 items-center"
              >
                Contact Now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 gap-5 flex justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-semibold text-gray-200">
                Quick Links
              </h1>
              <div className="flex flex-col gap-1">
                <a className="text-sm font-medium">Home</a>
                <a className="text-sm font-medium">About Us</a>
                <a className="text-sm font-medium">Services</a>
                <a className="text-sm font-medium">Contact Us</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-semibold text-gray-200">
                Contact Us
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="size-4" />
                  <p className="text-sm">mail@mail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="size-4" />
                  <p className="text-sm">+91 0123456789</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="size-4" />
                  <p className="text-sm">Contai, 721401, WB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-center gap-2 lg:gap-5">
          <h1 className="text-center text-4xl lg:text-7xl font-bold tracking-wider">
            Let's Talk
          </h1>
          <div className="p-1 lg:p-3 bg-lime-600 rounded-full">
            <ArrowRightIcon className="size-10 lg:size-20 -rotate-45" />
          </div>
        </div>
      </Container>
      <div className="h-0.5 w-full max-w-7xl bg-lime-600 " />
      <div className="max-w-5xl w-full flex flex-col mx-auto lg:flex-row gap-5 justify-between  px-3 lg:px-0">
        <p className="text-sm text-gray-400">
          &#169;{" "}
          <span className="font-medium text-lime-600">The Artsy Lens</span> 2025
          | All Right Reserved
        </p>
        <div className="text-sm flex flex-col lg:flex-row items-start gap-1 lg:gap-5 ">
          <a className="font-medium text-gray-400 hover:text-gray-300 transiti duration-150">
            Terms & Conditions
          </a>
          <a className="font-medium text-gray-400 hover:text-gray-300 transiti duration-150">
            Privacy Policy
          </a>
          <a className="font-medium text-gray-400 hover:text-gray-300 transiti duration-150">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
