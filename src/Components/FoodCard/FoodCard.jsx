import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const FoodCard = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { name, price, image, recipe, _id } = item;
  const axiosSecure = UseAxiosSecure();

  const handleAddToCart = (food) => {
    if (user && user?.email) {
      // send to data in DB
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Food image" />
      </figure>
      <p className="bg-slate-900 p-1 text-white absolute right-0 mr-4 mt-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

//---------------------------------------------------------------
// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const FoodCard = ({ item }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user } = UseAuth();
//   const { name, price, image, recipe, _id } = item;
//   console.log(user, user?.email);

//   const handleAddToCart = (food) => {
//     if (user && user?.email) {
//       // send to data in DB
//       const cartItem = {
//         menuId: _id,
//         email: user?.email,
//         name,
//         image,
//         price,
//       };

//       axios.post("http://localhost:5000/carts", cartItem).then((res) => {
//         console.log(res.data);
//       });
//     } else {
//       Swal.fire({
//         title: "You are not Logged In",
//         text: "Please login to add to the cart?",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, Login",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           //  send the user to the login page
//           navigate("/login", { state: { from: location } });
//         }
//       });
//     }
//   };
//   return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//       <figure>
//         <img src={image} alt="Food image" />
//       </figure>
//       <p className="bg-slate-900 p-1 text-white absolute right-0 mr-4 mt-4">
//         ${price}
//       </p>
//       <div className="card-body flex flex-col items-center">
//         <h2 className="card-title">{name}</h2>
//         <p>{recipe}</p>
//         <div className="card-actions justify-end">
//           <button
//             onClick={() => handleAddToCart(item)}
//             className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;
