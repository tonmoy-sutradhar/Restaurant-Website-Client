import React from "react";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMarsAndVenus } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import UseCart from "../hooks/UseCart";

const Dashboard = () => {
  const [cart] = UseCart();
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd> Add Review
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList> My Booking
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <TiThMenu></TiThMenu>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Soup">
              <FaBagShopping></FaBagShopping>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Soup">
              <MdOutlineContactPhone></MdOutlineContactPhone>Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
