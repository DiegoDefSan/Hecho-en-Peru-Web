import React from 'react';
import { PriceRangeFilterComponent } from './filters/PriceRangeFilterComponent';
import { SortByFilterComponent } from './filters/SortByFilterComponent';
import { CategoryFilterComponent } from './filters/CategoryFilterComponent';
import { RegionFilterComponent } from './filters/RegionsFilterComponent';

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

interface Props {
  filterData: FilterInterface;
  setFilterData: React.Dispatch<React.SetStateAction<FilterInterface>>;
}

export const FiltersContainer = (props: Props) => {

  function handlePriceFilterChange(priceRange: string) {
    props.setFilterData({
      ...(props.filterData),
      priceRange: priceRange,
    });
  }

  function handleSortingFilterChange(sortingBy: string) {
    props.setFilterData({
      ...(props.filterData),
      sortBy: sortingBy,
    });
  }

  function handleCategoriesFilterChange(categoriesList: CategoryOption[]) {
    props.setFilterData({
      ...(props.filterData),
      categories: categoriesList,
    });
  }

  function handleRegionsFilterChange(regionsList: RegionOption[]) {
    props.setFilterData({
      ...(props.filterData),
      regions: regionsList,
    });
  }


  return (
    <div className="filter col-3"
    // style={windowWith > 992 ? { display: "block" } : { display: "none" }}
    >
      <h3>Apply filter</h3>
      <PriceRangeFilterComponent
        priceRange={props.filterData.priceRange}
        handleChange={handlePriceFilterChange}
      />
      <SortByFilterComponent
        sortBy={props.filterData.sortBy}
        handleChange={handleSortingFilterChange}
      />
      <CategoryFilterComponent
        categoriesList={props.filterData.categories}
        handleChange={handleCategoriesFilterChange}
      />
      <RegionFilterComponent
        regionsList={props.filterData.regions}
        handleChange={handleRegionsFilterChange}
      />
    </div>
  )
}