import { useState } from 'react';
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

    const [menuOpened, setMenuOpened] = useState("null");

    const openMenu = () => {
        setMenuOpened("true");
    };
    const closeMenu = () => {
        setMenuOpened("false");
    };

    return (  
        <div className="flex items-center justify-between ">
            <img src="images/orange-app-logo.svg" alt="App Logo" className="z-10 relative " />

            <div className="flex items-center sm:hidden ">
                {navLinks.map((item, index) => (
                    <NavLink key={index} to={item.link} className="text-lg font-medium leading-6 ml-5 relative lg:text-base ">
                        <div className="peer opacity-80 hover:opacity-100 capitalize ">{item.title}</div>
                        <div className="w-[20px] h-[3px] bg-[#171214] absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 peer-hover:opacity-100 
                            transition-all duration-200 ease-in-out " 
                        />
                    </NavLink>
                ))}
            </div>

            <div className="hidden sm:block ">
                {menuOpened === "false" || menuOpened === "null" ? 
                    <img src="icons/open-menu.svg" alt="Open Menu" className="z-10 relative " onClick={openMenu} />
                    : <></>
                }
                {menuOpened === "true" && 
                    <img src="icons/close-menu.svg" alt="Close Menu" className="z-10 relative " onClick={closeMenu} />
                }

                <div className={`w-screen h-full bg-slate-400 bg-opacity-20 absolute inset-0 -top-full ${menuOpened === "true" && "open-sidebar"} ${menuOpened === "false" && "close-sidebar"} `}>
                    <div className="pt-28 pb-10 bg-[#F1EBDA] flex flex-col gap-8 ">
                        {navLinks.map((item, index) => (
                            <NavLink key={index} to={item.link} className="text-lg font-medium leading-6 mx-auto ">
                                <div className="peer capitalize ">{item.title}</div>
                                <div className="w-[20px] h-[3px] bg-[#171214] mt-3 mx-auto opacity-0 peer-hover:opacity-100 " />
                            </NavLink>
                        ))}
                    </div>
                </div>
        </div>
        </div>
    );
}
 
export default NavBar;