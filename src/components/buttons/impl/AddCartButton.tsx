import { BaseButton } from "../BaseButton";

export const AddCartButton = () => {
  const addCartButtonStyles = {

    backgroundColor: "#242423",
    color: "#fff",
    border: "none",
    minWidth: "8.2rem",
    height: "2.5rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    padding: "0 0.6rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }

  const onHoverStyles = {
    backgroundColor: "#0E0E0E",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1019607843)",
  }

  return (
    <BaseButton
      className="add-cart-button"
      text="Add to cart"
      onClickFunction={() => { }}
      defaultStyles={addCartButtonStyles}
      onHoverStyles={onHoverStyles}
    />
  )
}