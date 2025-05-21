import { Container } from "@/Container";
import { FaCamera, FaUmbrellaBeach } from "react-icons/fa6";
import { IoMdCamera } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdEvent } from "react-icons/md";

const services = [
  {
    icon: <IoMdCamera size={60} className="fill-lime-600" />,
    title1: "Wedding",
    title2: "Photography",
    feature: [
      "Full-day coverage",
      "Candid & posed moments",
      "Online gallery & photo album options",
    ],
  },
  {
    icon: <FaUmbrellaBeach size={60} className="fill-lime-600" />,
    title1: "Portrait",
    title2: "Sessions",
    feature: [
      "2-3 hour session",
      "15+ edited or raw photos",
      "Indivisual, family, maternity or couple shoots",
    ],
  },
  {
    icon: <MdEvent size={60} className="fill-lime-600" />,
    title1: "Event",
    title2: "Photography",
    feature: [
      "Fast turnaround time",
      "Up to full-day coverage",
      "Birthday parties, corporate events, ceremonies",
    ],
  },
  {
    icon: <IoVideocam size={60} className="fill-lime-600" />,
    title1: "Commercial &",
    title2: " Branding",
    feature: [
      "Product photography",
      "Lifestyle shoots",
      "Headshots & team photos",
    ],
  },
];

export function Service() {
  return (
    <Container className="max-w-5xl flex flex-col justify-center items-center py-20 gap-5">
      <p className="text-sm font-medium tracking-wider font-Sansation text-lime-600">
        Services Offered
      </p>
      <div className="flex gap-5 w-full items-center justify-center">
        <div className="w-28 h-0.5 bg-gray-600" />
        <h1 className="text-4xl font-medium">Captures Emotions Time</h1>
        <div className="w-28 h-0.5 bg-gray-600" />
      </div>

      <div className="flex mt-5 gap-5 justify-between">
        {services.map((service, index) => (
          <div
            className="p-5 bg-gray-900 w-1/4 rounded-lg flex flex-col gap-3 border-2 border-transparent hover:border-lime-400 transition-all duration-500"
            key={index}
          >
            {service.icon}
            <div>
              <h1 className="text-xl font-semibold">{service.title1}</h1>
              <h1 className="text-xl font-semibold">{service.title2}</h1>
            </div>
            <div className="w-full h-[2px] bg-gray-700" />
            <div className="flex flex-col gap-2">
              {service.feature.map((feat) => (
                <div className="inline-flex gap-2 items-center">
                  <div className="p-1 bg-lime-400 rounded-full" />
                  <p className="text-xs text-balance font-medium">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
