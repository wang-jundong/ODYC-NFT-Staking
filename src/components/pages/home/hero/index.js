import React from "react";
import { pngs } from "../../../../assets/pngs";
 
const Hero = () => {
    return (
        <section
            id="home"
            className="lg:h-[100] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
        >
            <div className="">
                <img src={pngs.banner} alt="" />
            </div>
        </section>
    );
};

export default Hero;
