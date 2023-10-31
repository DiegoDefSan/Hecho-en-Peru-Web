import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { CatalogContainer } from "../components/CatalogContainer";

export const Catalog = () => {
  return (
    <div>
      <Header activeLink="catalog" />
      <Hero
        backgroundImgName="catalog-background.jpg"
        title="Catalog"
        description="Explore our extensive catalog of handcrafted products. From exquisite jewelry and
        handmade textiles to unique ceramics and home décor, you'll find a variety of options to
        suit every taste. Each item is created with skill and love, reflecting the rich cultural
        heritage of our artisans. Immerse yourself in the beauty and authenticity of traditional
        crafts."
      />

      <CatalogContainer />

      <Footer />
    </div>
  )
};