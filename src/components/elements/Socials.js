import React from "react";
import { NavLink } from "react-router-dom";
import { social } from "../../data";

const Socials = () => {
    return (
        <div className="flex flex-row items-center">
            <NavLink
                to="/stake"
                className="text-accent text-[15px] cursor-pointer transition-all duration-300 mr-6"
            >
                Stake
            </NavLink>
            <ul className="flex space-x-6 ">
                {social.map((item, index) => {
                    return (
                        <li
                            className="flex justify-center items-center text-accent"
                            key={index}
                        >
                            <a
                                className="text-base"
                                target="_blank"
                                href={item.href}
                            >
                                {item.icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Socials;
