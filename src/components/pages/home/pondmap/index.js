import React from "react";
import { webp } from "../../../../assets/webp";
 
const Pondmap = () => {
    return (
        <section className="section bg-tertiary" id="pondmap">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img
                        className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                        src={webp.about}
                        alt=""
                    />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                                Pondmap
                            </h2>
                            <p className="mb-4 text-accent">
                                Okay Duck Yacht Club
                            </p>
                            <hr className="mb-8 opacity-5" />
                            <p className="mb-8">
                                Here is the current pondmap we have in store.
                                Things we've accommplished in our one month of
                                coming to life are creating a successful second
                                airdrop collection that was free for all holders
                                of ODYC, host daily spaces, giveaways, and
                                events. Connecting with our community and
                                bringing members onto the team has been a top
                                priority.
                                <br />
                                <br></br> Our team acquired Otherside Deed
                                #70960 by Yuga Labs, development in
                                OthersideMeta will commence upon Yuga’s SDK
                                release for project applicants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pondmap;
