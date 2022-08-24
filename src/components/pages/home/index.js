import React from "react";
import About from "./about";
import BackTopBtn from "./backtopbtn";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Pondmap from "./pondmap";
import Portfolio from "./portfolio";
import Services from "./services";

const Home = () => {
    return (
        <div className="bg-white relative">
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Pondmap />
            <Services />
            <Footer />
            <BackTopBtn />
        </div>
    );
};

export default Home;
