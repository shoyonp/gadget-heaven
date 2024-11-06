import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster></Toaster>
      <div className="px-6 mt-6"><Navbar></Navbar></div>
      <div className="mb-10"><Outlet></Outlet></div>
      <Footer></Footer>
    </>
  );
}

export default App;
