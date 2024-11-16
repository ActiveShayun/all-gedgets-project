import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nabvar/Navbar";


const Layout = () => {


    return (
        <div className="max-w-6xl mx-auto px-3 bg-[#F7F7F7]">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default Layout;