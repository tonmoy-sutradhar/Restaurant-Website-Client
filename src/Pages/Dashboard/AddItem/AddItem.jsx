import React from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"Whats new?"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          {/* <input {...register("name")} /> */}
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipe Name* </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-2 ">
              <label className="label">
                <span className="label-text">Category </span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
                <option value="Soup">Soup</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full my-2 ">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          {/* Recipe Details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Write Recipe Details"
            ></textarea>
          </label>

          {/* File input section */}
          <div className="form-control w-full my-3">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input  w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
