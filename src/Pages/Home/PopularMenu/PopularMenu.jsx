import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((item) => item.category === "popular");
        setMenu(popularData);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline uppercase border-0 border-b-4 mt-4">
          View full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
