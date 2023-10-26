// Components
import SaveContacts from '@/components/SaveContact';
import Profile from '@/components/Profile';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Clients from '@/components/Clients';
import OfficeLoaction from '@/components/OfficeLocation';
import Message from '@/components/Message';
import Social from '@/components/Social';
import Footer from '@/components/Footer';

// Images
import logo from '/assets/girma/images/logo/logo.png';
import backgroundImage from '/assets/girma/images/background/back.png'

// Data
import { contactList } from './data/contactList';
import { skillList } from './data/skillList';
import { galleryList } from './data/galleryList';
import { clientsList } from './data/clientsList';
import { socialList } from './data/socialList';

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
        <Clients Clients={clientsList} />
        <OfficeLoaction Location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5246201596756!2d38.738253199999996!3d9.0158138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85df14fb2625%3A0xe80d3f08b64ff454!2zRGVsaW5hIEJ1aWxkaW5nIHwgbGlkZXRhIHwg4Yuw4YiK4YqTIOGIheGKleGNgyB8IOGIjeGLsOGJsw!5e0!3m2!1sam!2set!4v1675601013084!5m2!1sam!2set" />
        <Message user='girma' />
        <Social list={socialList} />
      </section>
      <Footer />
    </main>
  );
}

export default Girma;