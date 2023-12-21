import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export const Regions = () => {
  return (
    <div>
      <Header activeLink="regions" />
      <Hero
        backgroundImgName="regions-background.jpg"
        title="Regions"
        description="Discover cultural diversity through our handicrafts by region. Explore the different
        craft traditions and techniques found in every corner of the world. From colorful Latin
        American crafts to elegant Asian creations, each region has its own distinctive style.
        Be inspired by the rich culture and ingenuity of our artisans from around the world."
      />
      <Footer />
    </div>
  )
};