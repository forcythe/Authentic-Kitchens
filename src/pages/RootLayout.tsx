import NavBar from "../layouts/NavBar";
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (  
        <div className="app w-full h-screen px-[100px] pt-[30px] bg-[#F1EBDA] text-[#171214] ">
            <NavBar /> 
            <div className="mt-[50px] ">
                <Outlet />
            </div>
        </div>
    );
}
 
export default RootLayout;