import React from "react";

interface Props {
  priceRange: string;
  handleChange: Function;
}

export const PriceRangeFilterComponent = (props: Props) => {

  const [priceRangeAttribute, setPriceRangeAttribute] = React.useState<string>(props.priceRange);

  function changePriceRangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setPriceRangeAttribute(value);

    props.handleChange(value);
  }

  return (
    <fieldset className="fieldset-container">
      <legend>Price range</legend>
      <div className="options-container" id="price-range-filter">

        <div className="radio-input-container">
          <input
            type="radio"
            id="price-range-1"
            name="priceRange"
            value="all"
            checked={priceRangeAttribute === "all"}
            onChange={changePriceRangeValue}
          />
          <label htmlFor="price-range-1">All</label>
        </div>
        <div className="radio-input-container">
          <input
            type="radio"
            id="price-range-1"
            name="priceRange"
            value="0-99"
            checked={priceRangeAttribute === "0-99"}
            onChange={changePriceRangeValue}
          />
          <label htmlFor="price-range-1">$0 to $99</label>
        </div>

        <div className="radio-input-container">
          <input
            type="radio"
            id="price-range-2"
            name="priceRange"
            value="100-199"
            checked={priceRangeAttribute === "100-199"}
            onChange={changePriceRangeValue}
          />
          <label htmlFor="price-range-2">$100 to $199</label>
        </div>

        <div className="radio-input-container">
          <input
            type="radio"
            id="price-range-3"
            name="priceRange"
            value="200-299"
            checked={priceRangeAttribute === "200-299"}
            onChange={changePriceRangeValue}
          />
          <label htmlFor="price-range-3">$200 to $299</label>
        </div>

        <div className="radio-input-container">
          <input
            type="radio"
            id="price-range-4"
            name="priceRange"
            value="300-1000"
            checked={priceRangeAttribute === "300-1000"}
            onChange={changePriceRangeValue}
          />
          <label htmlFor="price-range-4">$300 to more</label>
        </div>
      </div>
    </fieldset>
  )
}