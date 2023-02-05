import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";


// import ProfileImage from "./components/ProfileImage";
// import PersonalInfo from "./components/PersonalInfo";
import Social from "./components/Social";
import Contact from "./components/Contact";
// import Shop from "./components/Shop";
// import Work from "./components/Work";
import Footer from "./components/Footer";
// import Project from "./components/Project";
// import Message from "./components/Message";

// Images
import placeholder from '../../../assets/images/placeholder/placeholder.png';
import image from '../../../assets/images/placeholder/placeholder.png'

import carrier from '../../../assets/images/clients/girma/carrier.png';
import clivet from '../../../assets/images/clients/girma/clivet.jpg';
import hp from '../../../assets/images/clients/girma/hp.jpg';
import rak from '../../../assets/images/clients/girma/rak.jpg';
import rifeng from '../../../assets/images/clients/girma/rifeng.jpg';
import gf from '../../../assets/images/clients/girma/gf.png';

// Girma
import girmaLogo from '../../../assets/images/logo/girma.jpg';
import SaveContacts from "./sections/savecontacts.";
import Profile from "./sections/profile";
import Skills from "./sections/skills";
import Gallery from "./sections/gallery";
import Message from "./sections/message";

const clients = [
    { id: 1, name: "carrier", image: carrier },
    { id: 2, name: "clivet", image: clivet },
    { id: 3, name: "hp", image: hp },
    { id: 4, name: "rak", image: rak },
    { id: 5, name: "rifeng", image: rifeng },
    { id: 6, name: "gf", image: gf },
];

// import girmaContact from '../../../assets/contacts/Girma_Atlabachew.vcf';

const Girma = () => {
    const router = useRouter();


    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <>
            <Head>
                <title>Grima Atlabachew</title>
                <meta name="description" content="Girma Atlabachew - Sanitary and Mechanical Contractor" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col w-full bg-gradient-to-br from-slate-700 via-violet-500 to-purple-700  min-h-screen  mx-auto">

                {/* Save Contacts */}
                <SaveContacts />

                {/* <ProfileImage /> */}
                <Profile />


                <section className="flex flex-col gap-8 w-full bg-white px-5 md min-h-screen py-5">
                    {/* Contact */}
                    <Contact />

                    <hr className="text-black bg-black border border-black rounded-full w-5/6 mx-auto" />

                    {/* Skills */}
                    <Skills />

                    {/* Gallery */}
                    <Gallery />

                    <section className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 items-center">
                            <h1 className="text-3xl md:text-5xl text-black">Clients</h1>
                            <hr className="w-1/6 text-red-800 border-2 border-red-800" />
                        </div>
                        <div className="min-h-40vh grid grid-cols-2 md:grid-cols-3 gap-10  md:px-20">
                            {
                                clients.map((items) => (
                                    <div className="flex flex-col h-32 md:h-60 w-full bg-white items-center justify-center gap-4 rounded-xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl" key={items.id}>
                                        <Image
                                            loader={myLoader}
                                            src={items.image}
                                            alt={items.name}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="flex flex-col gap-5 flex-wrap">


                    </section>

                    <section className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 items-center">
                            <h1 className="text-3xl md:text-5xl text-black">Location</h1>
                            <hr className="w-1/6 text-red-800 border-2 border-red-800" />
                        </div>
                        <div className="w-full gap-10 md:px-20">

                            <iframe
                                className="boorshad shadow-xl hover:shadow-2xl h-96 md:h-[40rem]"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.2607768682337!2d38.7866833!3d9.0160948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85091bba7025%3A0xc4c052f755971a73!2sGolagul%20Building!5e0!3m2!1sen!2set!4v1674298227376!5m2!1sen!2set"
                                width="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>

                        </div>
                    </section>
                    <Message />

                    <section>
                        <Social />
                    </section>
                </section>

                <Footer />
            </main>
        </>
    );
}

export default Girma;
