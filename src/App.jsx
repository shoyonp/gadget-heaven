import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="px-6 mt-6"><Navbar></Navbar></div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
