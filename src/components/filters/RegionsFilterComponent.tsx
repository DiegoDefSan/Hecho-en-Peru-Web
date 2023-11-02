import React from "react";

interface RegionOption {
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
        return { name: region.name, checked: !region.checked }
      }
      return region;
    });

    setRegionsAttribute(newRegionsList);

    props.handleChange(newRegionsList);
  }

  return (
    <fieldset className="fieldset-container">
      <legend>Regions</legend>
      <div className="options-container" id="categories-filter">
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="region"
            name="Arequipa"
            checked={regionsAttribute.find((region: RegionOption) => region.name === "Arequipa")?.checked}
            onChange={changeRegionsList}
          />
          <label htmlFor="region">Arequipa</label>
        </div>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="region"
            name="Cusco"
            checked={regionsAttribute.find((region: RegionOption) => region.name === "Cusco")?.checked}
            onChange={changeRegionsList}
          />
          <label htmlFor="region">Cusco</label>
        </div>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="region"
            name="Lima"
            checked={regionsAttribute.find((region: RegionOption) => region.name === "Lima")?.checked}
            onChange={changeRegionsList}
          />
          <label htmlFor="region">Lima</label>
        </div>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="region"
            name="Ayacucho"
            checked={regionsAttribute.find((region: RegionOption) => region.name === "Ayacucho")?.checked}
            onChange={changeRegionsList}
          />
          <label htmlFor="region">Ayacucho</label>
        </div>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            id="region"
            name="Moquegua"
            checked={regionsAttribute.find((region: RegionOption) => region.name === "Moquegua")?.checked}
            onChange={changeRegionsList}
          />
          <label htmlFor="region">Moquegua</label>
        </div>
      </div>
    </fieldset>
  )
}