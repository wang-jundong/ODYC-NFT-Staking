import React from "react";
import { services } from "../../../../data";

const Services = () => {
    return (
        <section id="services" className="section bg-primary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
                        The Team
                    </h2>
                    <p className="subtitle"></p>
                </div>
                <div className="grid lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const { image, name, description } = service;
                        return (
                            <div
                                className="bg-secondary p-6 rounded-2xl"
                                key={index}
                            >
                                <div className="text-accent rounded-sm flex justify-center items-center mb-6 text-[28px]">
                                    <img
                                        className="rounded-2xl"
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-xl font-medium mb-2">
                                    {name}
                                </h4>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
