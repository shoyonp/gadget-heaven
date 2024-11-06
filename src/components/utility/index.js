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

// get all products from wishlist
const getAllWishlists = () => {
  const allWishlist = localStorage.getItem("wishlist");
  if (allWishlist) {
    const whislists = JSON.parse(allWishlist);
    return whislists;
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

// add product to local storage wishList
const addToWishlist = (product) => {
  const wishlist = getAllWishlists();
  const isExist = wishlist.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("Item already exists in Wishlist");
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Item added to wishlist");
};

// remove a product from localstorage

export { addToCart, addToWishlist,getAllWishlists };
