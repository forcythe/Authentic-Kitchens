import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (  
        <div className="app w-screen h-screen bg-[#F1EBDA] text-[#171214] overflow-x-hidden ">
            <div className="px-[100px] pt-[30px] xl:px-14 sm:px-9 sm:pt-5 ">
                <div className="max-w-screen-2xl mx-auto ">
                    <NavBar /> 
                    <div className="mt-[50px] ">
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#171214] px-[100px] xl:px-14 sm:px-9 ">
                <Footer />
            </div>
        </div>
    );
}
 
export default RootLayout;