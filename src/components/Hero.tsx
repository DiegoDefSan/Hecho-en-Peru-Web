import React from "react";

import '../assets/styles/components/hero.css'

interface Props {
  backgroundImgName: string;
  title: string;
  description: string;
}

export const Hero = ({ backgroundImgName, title, description }: Props) => {

  const backgroundImgLocationPath = '../../public/images/hero_section/';

  const backgroundImgStyles = {
    backgroundImage: `url(${backgroundImgLocationPath}${backgroundImgName})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <section>
      <div className="p-6 background-img" style={backgroundImgStyles}>
        <div className="background">
          <div className="text-white">
            <h1>{title}</h1>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};