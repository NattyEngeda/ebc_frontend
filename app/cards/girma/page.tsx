import Head from 'next/head';
import SaveContacts from './sections/savecontacts.';
import Profile from './sections/profile';
import Contact from './components/Contact';
import Skills from './sections/skills';
import Gallery from './sections/gallery';
import Clients from './sections/clients';
import Message from './sections/message';
import Location from './sections/location';
import Social from './components/Social';
import Footer from './components/Footer';

const Girma = () => {
  return (
    <main className="flex flex-col w-full bg-gradient-to-br  from-[#3E97D1] via-violet-500 to-[#3F6D8C] min-h-screen  mx-auto">
      <SaveContacts />
      <Profile />
      <section className="flex flex-col gap-8 w-full bg-white px-5 md min-h-screen py-5">
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
  );
}

export default Girma;