import React from "react";
import Head from "next/head";


import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Girma
import SaveContacts from "./sections/savecontacts.";
import Profile from "./sections/profile";
import Skills from "./sections/skills";
import Gallery from "./sections/gallery";
import Message from "./sections/message";
import Clients from "./sections/clients";
import Location from "./sections/location";


const Girma = () => {
    return (
        <>
            <Head>
                <title>Grima Atlabachew</title>
                <meta name="description" content="Girma Atlabachew - Sanitary and Mechanical Contractor" />
                <meta property="og:title" content="Girma" />
                <meta
                    property="og:description"
                    content="Girma Atlabachew - Sanitary and Mechanical Contractor"
                />
                <meta
                    property="og:image"
                    content="/back2.png"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className="flex flex-col w-full bg-gradient-to-br  from-[#3E97D1] via-violet-500 to-[#3F6D8C] min-h-screen  mx-auto">
                <SaveContacts />
                <Profile />
                <section className="flex flex-col gap-8 w-full bg-white px-5 md min-h-screen py-5">
                    {/* Contact */}
                    <Contact />
                    <hr className="text-black bg-black border border-black rounded-full w-5/6 mx-auto" />
                    <Skills />
                    <Gallery />
                    <Clients />
                    <Location />
                    <Message />
                    <Social />
                </section>
                <Footer />
            </main>
        </>
    );
}

export default Girma;
