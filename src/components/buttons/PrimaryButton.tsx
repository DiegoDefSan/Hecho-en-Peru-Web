import React from "react";

interface Props {
  text: string;
  onClickFunction: () => void;
}

export const PrimaryButton = ({ text, onClickFunction }: Props) => {

  const [isHover, setIsHover] = React.useState(false);

  const primaryButtonStyles = {
    backgroundColor: "#E9806E",
    color: "#fff",
    border: "none",
    width: "11.2rem",
    height: "2.5rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    padding: "0 0.6rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }

  const onHoverStyles = {
    backgroundColor: "#E46953",
    boxShadow: "0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1019607843)",
  }

  return (
    <button
      className="primary-button"
      onClick={onClickFunction}
      style={isHover ? { ...primaryButtonStyles, ...onHoverStyles } : primaryButtonStyles}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
    </button>
  )
}