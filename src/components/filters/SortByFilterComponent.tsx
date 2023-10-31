import React from "react";

interface Props {
  sortBy: string;
  handleChange: Function;
}

export const SortByFilterComponent = (props: Props) => {

  const [sortByAttribute, setSortByAttribute] = React.useState<string>(props.sortBy);

  function changeSortByValue(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSortByAttribute(value);

    props.handleChange(value);
  }

  return (
    <fieldset className="fieldset-container">
      <legend>Sort by</legend>
      <div className="options-container" id="sorting-filter">

        <div className="radio-input-container">
          <input
            type="radio"
            id="sort-price-desc"
            name="sortBy"
            value="price-desc"
            checked={sortByAttribute === "price-desc"}
            onChange={changeSortByValue}
          />
          <label htmlFor="sort-price-desc">Highest to lowest</label>
        </div>

        <div className="radio-input-container">
          <input
            type="radio"
            id="sort-price-asc"
            name="sortBy"
            value="price-asc"
            checked={sortByAttribute === "price-asc"}
            onChange={changeSortByValue}
          />
          <label htmlFor="sort-price-asc"> Lowest to highest </label>
        </div>

        <div className="radio-input-container">
          <input
            type="radio"
            id="sort-rating-desc"
            name="sortBy"
            value="rating-desc"
            checked={sortByAttribute === "rating-desc"}
            onChange={changeSortByValue}
          />
          <label htmlFor="sort-rating-desc">Highest to lowest rating</label>
        </div>
      </div>

    </fieldset>
  )
}