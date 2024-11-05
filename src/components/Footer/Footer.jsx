const Footer = () => {
  return (
    <footer className=" bg-gray-100 text-n p-10">
      <div className="text-center mb-7">
        <h2 className="font-bold text-3xl mb-4">Gadget Heaven</h2>
        <p>Leading the way is cutting-edge technology and innovation</p>
      </div>
      <div className="md:w-3/4 flex justify-between mx-auto gap-7">
        <nav className="flex flex-col gap-3">
          <h6 className="font-bold text-lg">Product Support</h6>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col gap-3">
          <h6 className="font-bold text-lg">About Us</h6>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col gap-3">
          <h6 className="font-bold text-lg">Terms of Service</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
