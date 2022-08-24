import React from "react"; 
import Projects from "../../../elements/Projects";
 
const Portfolio = () => {
    return (
        <section id="portfolio" className="section bg-secondary min-h-[900px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
                        Our Collections
                    </h2>
                    <p className="subtitle">
                        Currently two beautiful collections living on the
                        Ethereum blockchain
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    );
};

export default Portfolio;
