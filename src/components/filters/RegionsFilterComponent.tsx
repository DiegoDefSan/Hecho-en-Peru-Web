import React from "react";

interface RegionOption {
  key: string;
  name: string;
  checked: boolean;
}

interface Props {
  regionsList: RegionOption[];
  handleChange: Function;
}

export const RegionFilterComponent = (props: Props) => {

  const [regionsAttribute, setRegionsAttribute] = React.useState<RegionOption[]>(props.regionsList);

  function changeRegionsList(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;

    const newRegionsList = regionsAttribute.map((region: any) => {
      if (region.name === name) {
        return { key: region.key, name: region.name, checked: !region.checked }
      }
      return region;
    });

    setRegionsAttribute(newRegionsList);

    props.handleChange(newRegionsList);
  }

  const regionsInputElementHTML = props.regionsList.map((regionProp: RegionOption) => {
    return (
      <div className="checkbox-input-container" key={`container-${regionProp.key}`}>
        <input
          type="checkbox"
          id={regionProp.name.toLowerCase()}
          name={regionProp.name}
          checked={regionsAttribute.find((region: RegionOption) => region.name === regionProp.name)?.checked}
          onChange={changeRegionsList}
        />
        <label htmlFor={regionProp.name.toLowerCase()}>{regionProp.name}</label>
      </div>
    );
  });

  return (
    <fieldset className="fieldset-container">
      <legend>Regions</legend>
      <div className="options-container" id="categories-filter">
        {regionsInputElementHTML}
      </div>
    </fieldset>
  )
}