import React from "react";
import { ProductContainer } from "./ProductContainer";

import '../assets/styles/components/catalog_container.css';
import { SortByFilterComponent } from "./filters/SortByFilterComponent";
import { CategoryFilterComponent } from "./filters/CategoryFilterComponent";
import { RegionFilterComponent } from "./filters/RegionsFilterComponent";
import { PriceRangeFilterComponent } from "./filters/PriceRangeFilterComponent";

interface CategoryOption {
  name: string;
  checked: boolean;
}

interface RegionOption {
  name: string;
  checked: boolean;
}

interface FilterInterface {
  sortBy: string;
  categories: CategoryOption[];
  regions: RegionOption[];
  minPrice: number;
  maxPrice: number;
}

export const CatalogContainer = () => {

  const [filterData, setFilterData] = React.useState<FilterInterface>({
    sortBy: "rating-desc",
    categories: [
      { name: "Accessories", checked: true },
      { name: "Furniture", checked: true },
      { name: "Scarfs", checked: true },
    ],
    regions: [
      { name: "Arequipa", checked: true },
      { name: "Cusco", checked: true },
      { name: "Lima", checked: true },
      { name: "Ayacucho", checked: true },
      { name: "Moquegua", checked: true },
    ],
    minPrice: 10,
    maxPrice: 1500,
  });

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

  function handlePriceFilterChange(minPriceSelected: number, maxPriceSelected: number) {
    setFilterData({
      ...filterData,
      minPrice: minPriceSelected,
      maxPrice: maxPriceSelected,
    });
  }


  return (
    <div className="catalog-container row">
      <div className="filter col-3">
        <h3>Apply filter</h3>
        <PriceRangeFilterComponent minPrice={filterData.minPrice} maxPrice={filterData.maxPrice} handleChange={handlePriceFilterChange} />
        <SortByFilterComponent sortBy={filterData.sortBy} handleChange={handleSortingFilterChange} />
        <CategoryFilterComponent categoriesList={filterData.categories} handleChange={handleCategoriesFilterChange} />
        <RegionFilterComponent categoriesList={filterData.regions} handleChange={handleRegionsFilterChange} />
      </div>

      <div className="products-container col-md-9 col-sm-12 row">
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
        <ProductContainer
          productImgName="poncho-lana-main.jpg"
          productImgAlt="poncho de lana"
          productTitle="Poncho de lana"
          productPrice={150.00}
          productRating={4.5}
        />
      </div>
    </div>
  )
}