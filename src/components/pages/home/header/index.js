import React, { useEffect, useState } from "react";
import { pngs } from "../../../../assets/pngs";
import Nav from "../../../elements/Nav";
import NavMobile from "../../../elements/NavMobile";
import Socials from "../../../elements/Socials";

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <header
            className={`${
                bg ? "bg-tertiary h-20" : "h-24"
            } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
        >
            <div className="container mx-auto h-full flex items-center justify-between">
                <a target="_blank" href="https://discord.gg/odyc">
                    <img src={pngs.logo} alt="" />
                </a>
                <div className="hidden lg:block">
                    <Nav />
                </div>
                <div className="hidden lg:block">
                    <Socials />
                </div>
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    );
};

export default Header;
