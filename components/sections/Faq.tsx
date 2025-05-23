import { Container } from "@/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export function Faq() {
  return (
    <div className="relative overflow-hidden py-10 lg:py-20">
      <Container className="relative max-w-5xl py-5 lg:py-10 overflow-hidden flex flex-col justify-center items-center gap-2 lg:gap-5">
        <p className="text-xs lg:text-sm font-medium tracking-wider font-Sansation text-lime-600">
          Some Questions
        </p>
        <div className="flex gap-5 w-full items-center justify-center pb-5 lg:pb-20">
          <div className="hidden lg:block w-28 h-0.5 bg-gray-600" />
          <h1 className="text-2xl lg:text-4xl font-medium">
            Questions And Answers
          </h1>
          <div className="hidden lg:block w-28 h-0.5 bg-gray-600" />
        </div>
        <div className="w-full max-w-3xl flex flex-col gap-8 bg-gray-800/30 px-5 lg:px-10 py-10 lg:py-15 rounded-lg ">
          {faqs.map((faq, index) => (
            <Disclosure
              as="div"
              defaultOpen={index === 0 ? true : false}
              key={index}
              className="pb-2.5 border-b border-gray-600/80"
            >
              <DisclosureButton className="group flex w-full items-center gap-5 justify-between">
                <span className="text-sm lg:text-xl font-medium text-left text-white group-data-hover:text-white/80">
                  {faq.question}
                </span>
                <div className="p-0.5 border border-lime-400 group-data-open:bg-lime-400 rounded-full transition-all duration-200">
                  <PlusIcon className="size-5 fill-lime-400 group-data-hover:fill-lime-500 group-data-open:hidden" />
                  <MinusIcon className="hidden size-5 fill-gray-950 group-data-hover:fill-gray-900 group-data-open:block" />
                </div>
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm font-medium text-gray-400">
                {faq.answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </Container>
    </div>
  );
}

const faqs = [
  {
    question: "What type of photography services do we offer?",
    answer:
      "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
  },
  {
    question: "Are there additionsl cost for travel to different locations?",
    answer:
      "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
  },
  {
    question: "Can anyone request for deffernt styles for photos?",
    answer:
      "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
  },
  {
    question: "Do we provide prints or digital copy of the photos?",
    answer:
      "Photography is th art of capturing moments and expressing emotions through visual storytelling. It involves skillfully using cameraslighting and editing tools. And to create it involves skillfully using cameras, lenses, lighting, and editing tools to create stunning images.",
  },
];
