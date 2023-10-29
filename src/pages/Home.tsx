import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div>
      <Header activeLink="home" />
      <Hero
        backgroundImgName="home-background.png"
        title="Hecho en Perú"
        description="Welcome to our handmade products store, where you will find a wide selection of unique and authentic
        creations. selection of unique and authentic creations. Explore our catalog and discover the beauty and
        charm of handmade crafts. the beauty and charm of handmade crafts and be captivated by the creativity and
        talent of our creativity and talent of our artisans!"
      />
      <Footer />
    </div>
  )
};