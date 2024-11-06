import toast from "react-hot-toast";

// get all products from local storage
const getAllCarts = () => {
  const allCart = localStorage.getItem("carts");
  if (allCart) {
    const carts = JSON.parse(allCart);
    return carts;
  } else {
    return [];
  }
};

// add product to local storage cart
const addToCart = (product) => {
  const carts = getAllCarts();
  toast.success("Item added to cart");
  carts.push(product);
  localStorage.setItem("carts", JSON.stringify(carts));
};

// get all products from wishlist
const getAllWishlists = () => {
  const all = localStorage.getItem("wish");
  if (all) {
    const wishLists = JSON.parse(all);
    return wishLists;
  } else {
    return [];
  }
};

// add product to local storage wishList
const addToWishlist = (product) => {
  const wishLists = getAllWishlists();
  const isExist = wishLists.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("Item already exists in Wishlist");
  wishLists.push(product);
  localStorage.setItem("wish", JSON.stringify(wishLists));
  toast.success("Item added to wishlist");
};

// remove a product from localstorage

export { addToCart, addToWishlist, getAllWishlists, getAllCarts };
