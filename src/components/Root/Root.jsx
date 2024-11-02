
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto p-10 space-y-10" >
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;