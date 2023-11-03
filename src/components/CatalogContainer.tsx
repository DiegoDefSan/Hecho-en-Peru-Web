import React from "react";
import { ProductContainer } from "./ProductContainer";

import '../assets/styles/components/catalog_container.css';
import { SortByFilterComponent } from "./filters/SortByFilterComponent";
import { CategoryFilterComponent } from "./filters/CategoryFilterComponent";
import { RegionFilterComponent } from "./filters/RegionsFilterComponent";
import { PriceRangeFilterComponent } from "./filters/PriceRangeFilterComponent";
import Category from "../interfaces/category";
import Region from "../interfaces/region";
import Product from "../interfaces/product";

interface CategoryOption {
  key: string;
  name: string;
  checked: boolean;
}

interface RegionOption {
  key: string;
  name: string;
  checked: boolean;
}

interface FilterInterface {
  sortBy: string;
  priceRange: string;
  categories: CategoryOption[];
  regions: RegionOption[];
}

interface ApiProps {
  categories: Category[];
  regions: Region[];
  products: Product[];
}

export const CatalogContainer = (props: ApiProps) => {

  const [products, setProducts] = React.useState<Product[]>(props.products);

  const [filterData, setFilterData] = React.useState<FilterInterface>({
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


  function handlePriceFilterChange(priceRange: string) {
    setFilterData({
      ...filterData,
      priceRange: priceRange,
    });
  }

  function handleSortingFilterChange(sortingBy: string) {
    setFilterData({
      ...filterData,
      sortBy: sortingBy,
    });
  }

  function handleCategoriesFilterChange(categoriesList: CategoryOption[]) {
    setFilterData({
      ...filterData,
      categories: categoriesList,
    });
  }

  function handleRegionsFilterChange(regionsList: RegionOption[]) {
    setFilterData({
      ...filterData,
      regions: regionsList,
    });
  }

  function filterProducts() {

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

  React.useEffect(() => {
    filterProducts();
  }, [filterData]);

  const productsContainerElementHTML = products.map((product) => {
    return (
      <ProductContainer
        key={product.idProduct}
        productImgName={product.imagePath}
        productImgAlt={product.name}
        productTitle={product.name}
        productPrice={product.price}
        productRating={product.rating}
      />
    );
  });


  return (
    <div className="catalog-container row">
      <div className="filter col-3">
        <h3>Apply filter</h3>
        <PriceRangeFilterComponent
          priceRange={filterData.priceRange}
          handleChange={handlePriceFilterChange}
        />
        <SortByFilterComponent
          sortBy={filterData.sortBy}
          handleChange={handleSortingFilterChange}
        />
        <CategoryFilterComponent
          categoriesList={filterData.categories}
          handleChange={handleCategoriesFilterChange}
        />
        <RegionFilterComponent
          regionsList={filterData.regions}
          handleChange={handleRegionsFilterChange}
        />
      </div>

      <div className="products-container col-md-9 col-sm-12 row">
        {productsContainerElementHTML}
      </div>
    </div>
  )
}