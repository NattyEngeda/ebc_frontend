"use client"
import SaveContacts from '@/components/SaveContact'
import React, { useState } from 'react'
import Profile from '@/components/Profile';

// Images
import logo from '/assets/teddy/images/logo/logo.gif';
import backgroundImage from '/assets/teddy/images/background/back1.png';
import Contact from '@/components/Contact';
import { contactList } from './data/contactList';
import Skills from '@/components/Skills';
import { skillList } from './data/skillList';
import Gallery from '@/components/Gallery';
import { galleryList } from './data/galleryList';
import Clients from '@/components/Clients';
import { clientList } from './data/clientList';
import Location from '@/components/location';
import Message from '../girma/sections/message';
import Social from '@/components/Social';
import { socialList } from './data/socialList';
import Footer from '../../../components/Footer';

export default function Teddy() {
  var color1 = 'from-slate-200 via-[#ECBD00] to-[#FFDF00]';
  var color2 = 'from-slate-200 via-[#AB855A] to-[#AB855A]';

  const [bgColor, setBgColor] = useState(color1);

  return (
    <main className={`flex flex-col w-full bg-gradient-to-br ${bgColor} min-h-screen mx-auto`}>
      <SaveContacts
        name='Tewodros Tewodros'
        contactInfo='/teddy/files/Tewodros-Demis.vcf'
        image={logo}
        color={`bg-gradient-to-br ${bgColor}`}
        imageWidth='w-20'
        textColor='text-black'
      />
      <Profile
        name="Tewodros Demis"
        textColor1="text-[#062D3D]"
        textColor2="text-white"
        position='General Manager'
        work="Tewodros Dolomite Mining and Supply "
        image={backgroundImage} />
      <section className="flex flex-col gap-8 w-full bg-white px-5 md min-h-screen py-5">
        <Contact list={contactList} />
        <hr className="text-black bg-black border border-black rounded-full w-5/6 mx-auto" />
        <Skills skill={skillList} />
        <Gallery Images={galleryList} />
        <Clients Clients={clientList} />
        <Location Location="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126115.11525087028!2d38.7781448!3d8.9631768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1698323863259!5m2!1sen!2set" />
        <Message user='teddy' />
        <Social list={socialList} />
      </section>
      <Footer />
    </main>
  )
}
