// get all products from local storage
const getAllCarts = () => {
    const allCart = localStorage.getItem('carts')
    if(allCart){
        const carts = JSON.parse(allCart)
        return carts;
    }
    else{
        return[]
    }
}

// add product to local storage
const addToCart = (product) => {
  const carts = getAllCarts()
  const isExist = carts.find(item => item.product_id == product.product_id)
  if(isExist) return alert('omk bye')
  carts.push(product)
  localStorage.setItem('carts', JSON.stringify(carts))
};

// remove a product from localstorage

export { addToCart,getAllCarts };
