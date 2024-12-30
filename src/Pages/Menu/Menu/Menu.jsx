import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} title={"our menu"}></Cover>
      {/* Main cover */}

      <SectionTitle
        heading={"Today's offer"}
        subHeading={`Don't miss`}
      ></SectionTitle>

      {/* Offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu item */}
      <MenuCategory
        CvrImg={dessertImg}
        items={desserts}
        title={"Dessert"}
      ></MenuCategory>

      {/* Pizza menu item */}
      <MenuCategory
        CvrImg={pizzaImg}
        items={pizza}
        title={"Pizza"}
      ></MenuCategory>

      {/* Soup menu item */}
      <MenuCategory CvrImg={soupImg} items={soup} title={"Soup"}></MenuCategory>

      {/* Salad menu item */}
      <MenuCategory
        CvrImg={saladImg}
        items={salad}
        // title={"Salad"}
        title={"salad"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
