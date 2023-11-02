import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { CatalogContainer } from "../components/CatalogContainer";
import useCategories from "../hooks/useCategories";
import useRegions from "../hooks/useRegions";
import useProducts from "../hooks/useProducts";

export const Catalog = () => {

  const {
    data: categories,
    isLoading: isLoadingCategories
  } = useCategories();

  const {
    data: regions,
    isLoading: isLoadingRegions
  } = useRegions();

  const {
    data: products,
    isLoading: isLoadingProducts
  } = useProducts();

  if (isLoadingCategories || isLoadingRegions || isLoadingProducts) {
    return <div>Loading...</div>
  }

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

      <CatalogContainer
        categories={categories!}
        regions={regions!}
        products={products!}
      />

      <Footer />
    </div>
  )
};