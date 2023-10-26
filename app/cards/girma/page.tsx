import Head from 'next/head';
import SaveContacts from '../../../components/savecontacts.';
import Profile from '../../../components/profile';
import Contact from '../../../components/Contact';
import Skills from '../../../components/skills';
import Gallery from '../../../components/gallery';
import Clients from './sections/clients';
import Message from './sections/message';
import Location from './sections/location';
import Social from './components/Social';
import Footer from './components/Footer';

// Images
import logo from '/assets/girma/images/logo/logo.png';
import backgroundImage from '/assets/girma/images/background/back.png'
import { contactList } from './data/contactList';
import { skillList } from './data/skillList';
import { galleryList } from './data/galleryList';

const Girma = () => {
  return (
    <main className="flex flex-col w-full bg-gradient-to-br  from-[#3E97D1] via-violet-500 to-[#3F6D8C] min-h-screen  mx-auto">
      <SaveContacts
        name='Girma Atlabachew'
        contactInfo='/girma/files/Girma Atlabachew.vcf'
        image={logo}
        color=' bg-gradient-to-br from-slate-700 via-violet-500 to-purple-700'
        imageWidth='w-12'
        textColor='text-white' />
      <Profile
        name="Girma Atlabachew"
        textColor1="text-[#267E7C]"
        textColor2="text-black"
        position='General Manager'
        work='Sanitary and Mechanical  Contractor'
        image={backgroundImage} />
      <section className="flex flex-col gap-8 w-full bg-white px-5 md min-h-screen py-5">
        <Contact list={contactList} />
        <hr className="text-black bg-black border border-black rounded-full w-5/6 mx-auto" />
        <Skills skill={skillList} />
        <Gallery Images={galleryList} />
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