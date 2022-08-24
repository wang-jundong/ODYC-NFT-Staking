import React from "react";

const About = () => {
    return (
        <section className="section bg-primary" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                            About Us
                        </h2>
                        <p className="mb-4 text-accent">Okay Duck Yacht Club</p>
                        <hr className="mb-8 opacity-5" />
                        <p className="mb-8 lg:text-left">
                            First, let’s talk about the art and the artist. Our
                            unique collection of 5,555 ducks was launched on May
                            25th, 2022. The artist of the project is a female
                            from Ukraine named Nonny. She came up with the idea
                            of the ducks because growing up her nickname was
                            "ducky”, and her favorite animals were ducks; she
                            also loved the Bored Ape Yacht Club style art, so
                            she put them together and poof we have our
                            Quacktastic ducks! <br />
                            <br />
                            We recently just released our second collection made
                            by the same artist. Nonny has created 7,777 unique
                            ducklings with all original traits along with five
                            1/1's. These ducklings hatched out of eggs you
                            received by holding the genesis ducks and are now
                            also sold out. We have created one of the strongest
                            communities out there who were first brought
                            together by the amazing unique art of this project
                            and stayed for the amazing, loving and caring
                            community we have built here today.
                        </p>
                    </div>
                    <p>
                        All Duck or Duckling holders own the IP rights to use
                        the image of their NFTs how ever they see fit.
                    </p>
                    <br></br>

                    <a
                        className="capitalize text-accent text-md mb-3"
                        target="_blank"
                        href="https://discord.gg/odyc"
                    >
                        Join our Discord
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
