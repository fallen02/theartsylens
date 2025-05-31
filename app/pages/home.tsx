import type { Route } from "./+types/home";
import { Hero } from "@/sections/Hero";
import { AboutUs } from "@/sections/AboutUs";
import { Service } from "@/sections/Service";
import { Photography } from "@/sections/Photography";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";
import { Faq } from "@/sections/Faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Artsy Lens" },
    { name: "description", content: "Welcome to the Artsy Lens" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <Photography />
      {/* <Slider /> */}
      <Testimonials />
      <CTA />
      <Faq />
    </>
  );
}
