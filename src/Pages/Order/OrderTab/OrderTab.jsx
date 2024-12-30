import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((sop) => (
        <FoodCard key={sop._id} item={sop}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
