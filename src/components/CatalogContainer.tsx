import React from "react";
import Category from "../interfaces/category";
import Region from "../interfaces/region";
import Product from "../interfaces/product";
import { FiltersContainer } from "./FiltersContainer";
import { ProductsContainer } from "./ProductsContainer";

import '../assets/styles/components/catalog_container.css';

interface ApiProps {
  categories: Category[];
  regions: Region[];
  products: Product[];
}

export const CatalogContainer = (props: ApiProps) => {

  const [products, setProducts] = React.useState<Product[]>(props.products);

  const [filterData, setFilterData] = React.useState({
    sortBy: "rating-desc",
    priceRange: "all",
    categories: props.categories
      .map((category) => (
        { key: category.idCategory, name: category.name, checked: true }
      )),
    regions: props.regions
      .map((region) => (
        { key: region.idRegion, name: region.name, checked: true }
      )),
  });

  React.useEffect(() => {
    const filterProducts = () => {
      const priceRangeSelected = filterData.priceRange;
      const minPriceSelected = priceRangeSelected === "all" ? 0 : Number(filterData.priceRange.split("-")[0]);
      const maxPriceSelected = priceRangeSelected === "all" ? 1000 : Number(filterData.priceRange.split("-")[1]);
      const categoriesSelected = filterData.categories;
      const regionsSelected = filterData.regions;

      const filteredProducts = props.products
        .filter((product) => {
          const productPrice = product.price;
          return productPrice >= minPriceSelected && productPrice <= maxPriceSelected;
        })
        .filter((product) => {
          const productIdCategory = product.category.idCategory;
          return categoriesSelected.find((category) => category.key === productIdCategory)?.checked;
        })
        .filter((product) => {
          const productIdRegion = product.region.idRegion;
          return regionsSelected.find((region) => region.key === productIdRegion)?.checked;
        })
        .sort((productA, productB) => {
          switch (filterData.sortBy) {
            case "price-asc":
              return productA.price - productB.price;
            case "price-desc":
              return productB.price - productA.price;
            case "rating-asc":
              return productA.rating - productB.rating;
            case "rating-desc":
              return productB.rating - productA.rating;
            default:
              return 0;
          }
        });

      setProducts(filteredProducts);
    }

    filterProducts();
  }, [filterData]);


  return (
    <div className="catalog-container row">
      <FiltersContainer
        filterData={filterData}
        setFilterData={setFilterData}
      />

      <ProductsContainer
        products={products}
      />
    </div>
  )
}