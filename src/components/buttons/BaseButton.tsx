import React from "react";

interface Props {
  className: string;
  text: string;
  onClickFunction: () => void;
  defaultStyles: object;
  onHoverStyles: object;
}

export const BaseButton = ({ className, text, onClickFunction, defaultStyles, onHoverStyles }: Props) => {

  const [isHover, setIsHover] = React.useState(false);

  return (
    <button
      className={className}
      onClick={onClickFunction}
      style={isHover ? { ...defaultStyles, ...onHoverStyles } : defaultStyles}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
    </button>
  )
}