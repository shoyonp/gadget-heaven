import React from "react";
import UseTitle from "../components/UseTitle/UseTitle";

const Faq = () => {
  UseTitle("FAQ");
  return (
    <>
      <div className="w-5/6 mx-auto">
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of products can I find on Gadget Heaven?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500">
              Gadget Heaven offers a wide range of cutting-edge tech gadgets,
              including laptops, smartphones, smartwatches, and tech
              accessories. We strive to bring you the latest devices to enhance
              your tech experience.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I navigate between different product categories?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500">
              You can use the category filters on the left side of the page to
              browse through different product categories, such as Laptops,
              Phones, Smart Watches, and Accessories. Simply click on a category
              to view all items in that category.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I view more details about a product?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500">
              Each product listing has a "View Details" button. Clicking on it
              will take you to a detailed page where you can learn more about
              the product's specifications, price, and availability.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I add items to a wishlist?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500">
              Yes, you can add your favorite gadgets to your wishlist by
              clicking on the heart icon. This way, you can keep track of the
              items you’re interested in for future reference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
