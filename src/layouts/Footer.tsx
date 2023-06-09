import { Link } from 'react-router-dom'

const Footer = () => {
    const footerLinks1 = [
        {
            title: "Tasting Events",
            link: "/events"
        },
        {
            title: "Featured Menu",
            link: "/menu"
        },
        {
            title: "Blog",
            link: "/blog"
        },
        {
            title: "Chefs",
            link: ""
        },
        {
            title: "FAQs",
            link: ""
        },
    ];
    const footerLinks2 = [
        {
            title: "About Us",
            link: "/about-us"
        },
        {
            title: "Terms of Service",
            link: "/terms-of-service"
        },
        {
            title: "Contact Us",
            link: "/contact-us"
        },
    ];

    return (  
        <div className="max-w-screen-2xl mx-auto pt-24 pb-16 leading-5 xl:text-sm xl:leading-[18px] sm:py-14 ">
            <div className="flex flex-row-reverse justify-between md:flex-col ">
                <div>
                    <div className="text-[#FA9733] font-medium mb-2 ">Subscribe to our newsletter</div>
                    <div className="border border-[#FE6E00] rounded-full bg-[#423F3E] flex items-center justify-between py-2 pr-2 pl-5 sm:w-full ">
                        <input type="text" placeholder="Enter your email address" 
                            className="outline-none w-52 bg-transparent mr-2 text-sm text-white placeholder:text-[#F1EBDA] sm:w-fit sm:grow "
                        />
                        <div className="px-[15px] py-[10px] rounded-full bg-[#FA9733] grid place-items-center text-white text-sm leading-[18px] font-bold cursor-pointer sm:text-xs sm:leading-[15px] ">Subscribe</div>
                    </div>
                </div>

                <div className="flex gap-20 text-white font-medium whitespace-nowrap xl:gap-14 lg:hidden ">
                    <div className="flex flex-col gap-3 ">
                        {footerLinks1.map((item) => (
                            <Link to={item.link} className='hover:opacity-80 '>{item.title}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 ">
                        {footerLinks2.map((item) => (
                            <Link to={item.link} className='hover:opacity-80 '>{item.title}</Link>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between lg:block ">
                    <div>
                        <img src="/images/white-app-logo.svg" alt="App Logo" className="h-8 mt-10 mb-7 hidden md:block " />
                        <div className="text-[#F1EBDA] w-[380px] md:w-full ">
                            Nulla elit enim interdum orci tellus quisque odio etiam. Mauris risus pharetra id pharetra a a ut. Aenean scelerisque neque commodo arcu faucibus rhoncus interdum bibendum.
                        </div>
                    </div>

                    <div className="gap-20 text-white font-medium hidden lg:flex lg:mt-10 sm:w-full sm:justify-between sm:gap-0 ">
                        <div className="flex flex-col gap-3 ">
                            {footerLinks1.map((item) => (
                                <Link to={item.link} className='hover:opacity-80 '>{item.title}</Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 ">
                            {footerLinks2.map((item) => (
                                <Link to={item.link} className='hover:opacity-80 '>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-fit mx-auto mt-[120px] mb-8 md:mt-[100px] sm:mb-6 ">
                <img src="/icons/socials/instagram.svg" alt="Imstagram" />
                <img src="/icons/socials/facebook.svg" alt="Facebook" className="mx-3" />
                <img src="/icons/socials/linkedin.svg" alt="LinkedIn" className="mr-3" />
                <img src="/icons/socials/youtube.svg" alt="Youtube" />
            </div>
            <div className="text-white text-center ">All rights reserved. © 2023 Authentic Kitchen</div>
        </div>
    );
}
 
export default Footer;