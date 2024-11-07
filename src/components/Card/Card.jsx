import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;
  return (
    <div className="bg-gray-100 border rounded-2xl p-4 mr-4 mb-4 shadow-md ">
      <div>
        <img className=" rounded-xl" src={product_image} alt="" />
        <h2 className="font-semibold text-lg my-2">{product_title}</h2>
        <p className="font-medium text-sm opacity-60 mb-4">Price: {price}k</p>
      </div>

      <span className="font-semibold text-md p-2 hover:bg-[#9538E2] hover:text-white border border-[#9538E2] rounded-3xl text-[#9538E2] ">
        <Link to={`/products/${product_id}`}>View Details</Link>
      </span>
    </div>
  );
};

export default Card;
