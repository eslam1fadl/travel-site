// app/page.js

import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Features />
      <Reviews />
      <CTA />
    </>
  );
}
