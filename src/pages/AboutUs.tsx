import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export const AboutUs = () => {
  return (
    <div>
      <Header activeLink="about-us" />
      <Hero
        backgroundImgName="about-us-background.png"
        title="About Us"
        description="In Hecho en Perú, we are passionate about promoting and preserving craft traditions. We
        are proud to work with talented artisans from different regions, encouraging their
        creativity and providing them with a platform to showcase their creations. Discover our
        history, meet the team behind our company and join us on our journey of
        craft appreciation."
      />
      <Footer />
    </div>
  )
};