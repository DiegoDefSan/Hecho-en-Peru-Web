import React from "react";

interface CategoryOption {
  name: string;
  checked: boolean;
}

interface Props {
  categoriesList: CategoryOption[];
  handleChange: Function;
}


export const CategoryFilterComponent = (props: Props) => {

  const [categoriesAttribute, setCategoriesAttribute] = React.useState<CategoryOption[]>(props.categoriesList);

  function changeCategoriesList(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;

    const newCategoriesList = categoriesAttribute.map((category: any) => {
      if (category.name === name) {
        return { name: category.name, checked: !category.checked }
      }
      return category;
    });

    setCategoriesAttribute(newCategoriesList);

    props.handleChange(newCategoriesList);
  }


  return (
    <fieldset className="fieldset-container">
      <legend>Categories</legend>
      <div className="options-container" id="categories-filter">
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="accessories"
            name="Accessories"
            checked={categoriesAttribute.find((category: CategoryOption) => category.name === "Accessories")?.checked}
            onChange={changeCategoriesList}
          />
          <label htmlFor="accessories">Accessories</label>
        </div>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="furniture"
            name="Furniture"
            checked={categoriesAttribute.find((category: CategoryOption) => category.name === "Furniture")?.checked}
            onChange={changeCategoriesList}
          />
          <label htmlFor="furniture">Furniture</label>
        </div>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="scarfs"
            name="Scarfs"
            checked={categoriesAttribute.find((category: CategoryOption) => category.name === "Scarfs")?.checked}
            onChange={changeCategoriesList}
          />
          <label htmlFor="scarfs">Scarfs</label>
        </div>
      </div>
    </fieldset >
  )
}