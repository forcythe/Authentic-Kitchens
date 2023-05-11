import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const navLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Menu",
            link: "/menu"
        },
        {
            title: "Events",
            link: "/events"
        },
        {
            title: "Blog",
            link: "/blog"
        },
    ];

    return (  
        <div className="flex items-center justify-between ">
            <img src="public\images\app-logo.svg" alt="" />

            <div className="flex items-center ">
                {navLinks.map((item, index) => (
                    <NavLink key={index} to={item.link} className="text-[18px] font-medium leading-6 ml-5 relative ">
                        <div className="peer opacity-80 hover:opacity-100 capitalize ">{item.title}</div>
                        <div className="w-[20px] h-[3px] bg-[#171214] absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 peer-hover:opacity-100 
                            transition-all duration-200 ease-in-out " 
                        />
                    </NavLink>
                ))}

                <div className="border-2 rounded-full border-[#FA9733] h-[45px] py-3 px-6 ml-10 leading-5 font-bold flex items-center justify-center cursor-pointer 
                hover:border-[#171214] hover:bg-white transition-all duration-500 ease-in-out ">Book Now</div>
            </div>
        </div>
    );
}
 
export default NavBar;