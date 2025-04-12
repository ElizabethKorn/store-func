import React from "react";

export const ShopItemFunc = ({ item }) => {
  const formattedPrice = `${item.currency}${item.price.toFixed(2)}`;
  return (
    <div classname="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">{item.descriptionFull}</div>
      <div class="highlight-window mobile">
        <div class="highlight-overlay"></div>
      </div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{formattedPrice}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};
