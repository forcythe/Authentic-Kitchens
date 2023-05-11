import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (  
        <div className="app w-full h-screen bg-[#F1EBDA] text-[#171214] ">
            <div className="px-[100px] pt-[30px] ">
                <div className="max-w-screen-2xl mx-auto ">
                    <NavBar /> 
                    <div className="mt-[50px] ">
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#171214] px-[100px] ">
                <Footer />
            </div>
        </div>
    );
}
 
export default RootLayout;