import React from "react";

interface CategoryOption {
  key: string;
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
        return { key: category.key, name: category.name, checked: !category.checked }
      }
      return category;
    });

    setCategoriesAttribute(newCategoriesList);

    props.handleChange(newCategoriesList);
  }


  const categoriesInputElementHTML = props.categoriesList.map((categoryProp: CategoryOption) => {
    return (
      <div className="checkbox-input-container" key={`container-${categoryProp.key}`}>
        <input
          type="checkbox"
          id={categoryProp.name.toLowerCase()}
          name={categoryProp.name}
          checked={categoriesAttribute.find((category: CategoryOption) => category.name === categoryProp.name)?.checked}
          onChange={changeCategoriesList}
        />
        <label htmlFor={categoryProp.name.toLowerCase()}>{categoryProp.name}</label>
      </div>
    );
  });


  return (
    <fieldset className="fieldset-container">
      <legend>Categories</legend>
      <div className="options-container" id="categories-filter">
        {categoriesInputElementHTML}
      </div>
    </fieldset >
  )
}