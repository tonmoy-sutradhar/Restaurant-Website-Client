import React from "react";

const MenuItem = ({ item }) => {
  const { price, category, image, recipe, name } = item;
  return (
    <div className="flex space-x-2">
      <div>
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[120px]"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h1 className="uppercase">{name} -----------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
