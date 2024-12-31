const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
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
          <button className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
