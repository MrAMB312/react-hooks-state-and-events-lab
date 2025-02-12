import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  
  function toggleIsInCart() {
    setIsInCart((prevMode) => !prevMode);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleIsInCart}>
        {isInCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
