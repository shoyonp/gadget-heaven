import { NavLink } from "react-router-dom";
import "./Categories.css";
const Categories = ({ categories }) => {
  return (
    <div className=" bg-white border rounded-2xl p-7">
      <span className="">
        {/* <NavLink className={({isActive})=> `bg-gray-200 p-3 rounded-3xl ${isActive? 'active' : ''}`}>All products</NavLink> */}
      </span>
      {categories.map((category) => (
        <span
          key={category.product_id}
          className=" grid grid-cols-2 md:grid-cols-1 my-3"
        >
          <NavLink
            className={({ isActive }) =>
              `bg-gray-200 p-3 rounded-3xl ${isActive ? "active" : ""}`
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
