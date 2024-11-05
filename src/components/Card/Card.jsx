const Card = ({ product }) => {
  const { product_title } = product;
  console.log(product);
  return <div>{product_title}</div>;
};

export default Card;
