import { Link, NavLink } from "react-router-dom";

const Card = ({ product }) => {
  const { product_title,product_image,price,product_id } = product;
  console.log(product);
  return (
    <div className="bg-gray-100 border rounded-2xl p-5 mr-4 mb-4 shadow-md ">
        <img className="w-[350px] h-[200px] object-cover rounded-xl" src={product_image} alt="" />
        <h2 className="font-semibold text-xl my-3">{product_title}</h2>
        <p className="font-medium text-sm opacity-60 mb-4">Price: {price}k</p>
        {/* <button className="font-semibold text-lg p-2 hover:bg-[#9538E2] hover:text-white border border-[#9538E2] rounded-3xl text-[#9538E2]">View Details</button> */}
        <span className="font-semibold text-lg p-2 hover:bg-[#9538E2] hover:text-white border border-[#9538E2] rounded-3xl text-[#9538E2] "><Link to={`/products/${product_id}`}>View Details</Link></span>
    </div>
  );
};

export default Card;
