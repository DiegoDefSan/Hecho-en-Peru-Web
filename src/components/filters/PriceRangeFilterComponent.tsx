import React from 'react';

interface Props {
  minPrice: number;
  maxPrice: number;
  handleChange: Function;
}

export const PriceRangeFilterComponent = (props: Props) => {

  const [priceRange, setPriceRange] = React.useState({
    minPrice: props.minPrice,
    maxPrice: props.maxPrice,
  });

  function handlePriceRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPriceRange({
      ...priceRange,
      [name]: name === 'minPrice' ?
        (value === '' ? 0 : parseInt(value)) :
        (parseInt(value) <= priceRange.minPrice ? priceRange.minPrice + 1 : parseInt(value)),
    });


    props.handleChange(priceRange);
  }

  return (
    <fieldset className="fieldset-container" >
      <legend>Price range</legend>

      <div className="options-container" id='price-filter'>
        <div className="number-input-container">
          <span>Min</span>
          <input
            type="number"
            placeholder="Min price"
            name='minPrice'
            value={priceRange.minPrice}
            onChange={handlePriceRangeChange}
          />
        </div>
        <br />
        <div className="number-input-container">
          <span>Max</span>
          <input
            type="number"
            placeholder="Max price"
            name='maxPrice'
            value={priceRange.maxPrice}
            onChange={handlePriceRangeChange}
          />
        </div>
      </div>

    </fieldset>
  )
}