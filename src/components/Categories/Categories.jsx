import { NavLink } from "react-router-dom";
import "./Categories.css";
const Categories = ({ categories }) => {
  return (
    <div className=" bg-white rounded-2xl p-7 shadow-md">
      <span className="">
        <NavLink
          className={({ isActive }) =>
            `bg-gray-200 p-3 hover:bg-gray-400 hover:text-white rounded-3xl ${
              isActive ? "active" : ""
            }`
          }
          to="/"
        >
          All products
        </NavLink>
      </span>
      {categories?.map((category) => (
        <span key={category.product_id} className="flex flex-col my-3">
          <NavLink
            className={({ isActive }) =>
              `bg-gray-200 p-3 hover:bg-gray-400 hover:text-white rounded-3xl ${
                isActive ? "active" : ""
              }`
            }
            to={`/category/${category.category}`}
          >
            {category.category}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default Categories;
