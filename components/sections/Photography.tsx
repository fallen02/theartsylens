import { Container } from "@/Container";
import { ArrowRignt } from "@/icons/arrow";
import { cn } from "lib/utils";
import Wedding from "../assets/wedding.webp";
import Event from "../assets/event.webp";
import Potrait from "../assets/potrait.webp";
import { href, Link } from "react-router";

const photoSections = [
  {
    title: "Through the Lens of Creativity",
    desc: "Phtography is the art of capturing moments and expressing emotions throuth visual storytelling.",
    img: Wedding,
    href: "wedding",
  },
  {
    title: "Discover the Art of Photography",
    desc: "Phtography is the art of capturing moments and expressing emotions throuth visual storytelling.",
    img: Event,
    href: "event",
  },
  {
    title: "Lens Love Infinite Creativity",
    desc: "Phtography is the art of capturing moments and expressing emotions throuth visual storytelling.",
    img: Potrait,
    href: "potrait",
  },
];

export function Photography() {
  return (
    <Container className="max-w-5xl flex flex-col justify-center items-center py-10 lg:py-20 gap-2 lg:gap-5">
      <p className="text-xs lg:text-sm font-medium tracking-wider font-Sansation text-lime-600">
        Photography
      </p>
      <div className="flex gap-5 w-full items-center justify-center">
        <div className="hidden lg:block w-28 h-0.5 bg-gray-600" />
        <h1 className="text-2xl lg:text-4xl font-medium">
          Discover Our Photoshoot
        </h1>
        <div className="hidden lg:block w-28 h-0.5 bg-gray-600" />
      </div>
      <div className="w-full">
        {photoSections.map((section, index) => (
          <Link
            to={href("/gallery/:link", { link: section.href })}
            className={cn(
              "flex  flex-col-reverse lg:flex-row py-5 lg:py-10 gap-5 relative group",
              (index + 1) % 2 === 0 && "flex-col-reverse lg:flex-row-reverse "
            )}
            key={index}
          >
            <h1 className="absolute text-2xl/tight lg:text-5xl font-semibold left-2.5 lg:left-0 top-7 lg:top-14 z-50">
              {section.title}
            </h1>
            <div className="flex flex-col gap-4 mt-5 lg:mt-20 ">
              <p className="text-sm">{section.desc}</p>
              <div className="p-2 lg:p-3 bg-lime-950/50 w-fit rounded-full -rotate-45 hover:rotate-0 transition-transform duration-200">
                <ArrowRignt />
              </div>
            </div>
            <div className="relative w-full lg:w-3/5 max-h-full  overflow-hidden ">
              <div
                className={`absolute bg-black/20 bg-cover bg-center h-full w-full z-10`}
              />
              <img
                src={section.img}
                className="object-cover  w-full h-full scale-95 group-hover:scale-100 rounded-xl transition-transform duration-500"
              />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

// <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12">
//   {/* Left Content */}
//   <div className="flex-1 flex flex-col justify-center items-center">
//     <h2 className="text-2xl font-medium">{photography.title}</h2>
//     <p className="text-xs text-gray-300 font-medium">
//       {photography.desc}
//     </p>
//   </div>
//   {/* Right Image */}
//   <div className="flex-1 flex justify-center mt-10 md:mt-0">
//     <div className="rounded-lg overflow-hidden">
//       <img
//         src={photography.img}
//         alt="Sitting man by the water"
//         className="object-cover w-full h-full"
//       />
//     </div>
//   </div>
// </div>
