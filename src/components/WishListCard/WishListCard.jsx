import { TbXboxX } from "react-icons/tb";

const WishListCard = ({ product, handleRemove }) => {
  const { price, product_title, description, product_image, product_id } =
    product;
  return (
    <div className="flex flex-col md:flex-row md:flex-grow text-center md:text-left  items-center gap-5 bg-gray-200 p-4 rounded-2xl mb-3">
      <div>
        <img
          className="md:w-52 md:h-48 object-cover rounded-xl"
          src={product_image}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row  justify-between flex-grow items-center">
        <div>
          <h1 className="font-semibold text-xl mb-3">{product_title}</h1>
          <div className="flex flex-col md:flex-row gap-3">
            <span className="font-semibold text-lg mb-2">Description:</span>
            <p className="text-black/60 mb-3">{description}</p>
          </div>
          <p className="font-semibold text-lg mb-3">Price:$ {price}</p>
          <button className="p-3 bg-[#9538E2] rounded-3xl text-white font-medium text-lg mb-3">
            Add to Cart
          </button>
        </div>
        <div>
          <button
            onClick={() => handleRemove(product_id)}
            className="text-3xl text-right text-red-500"
          >
            <TbXboxX></TbXboxX>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
