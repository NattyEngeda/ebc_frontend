"use client"

import {
  IconMenu2,
} from "@tabler/icons-react";
import Image from 'next/image'
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import NavLink from './components/NavLink';

export default function Header() {
  return (
    <header className="z-40 bg-white w-full h-20 md:h-24 flex flex-row gap-20 items-center justify-center fixed md:px-20 glassy-header">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0 ">
        <div className="transition duration-300  md:px-5 md:py-1  flex flex-row gap-2 items-center justify-center">

          {/* Logo for Dersktop */}
          <div className="hidden md:block w-full rounded-xl bg-primary py-2 px-3">
            <Image
              priority={false}
              className="w-12 md:w-32 h-auto color-white"
              src="/images/logo/logo-letter-white.png"
              width={500}
              height={200}
              alt="Logo"
            />
          </div>

          {/* Logo for Mobile */}
          <div className="block md:hidden w-full rounded-xl p-1 bg-primary border">
            <Image
              priority={false}
              className="w-12 md:w-32 h-auto color-white"
              src="/images/logo/logo-white.png"
              width={500}
              height={200}
              alt="Logo"
            />
          </div>

        </div>

        <div className="hidden lg:block px-10 py-3 ">
          <ul className="flex flex-row items-center gap-10 font-semibold">
            <NavLink href="/" exact className="text-md font-light  ">
              Home
            </NavLink>
            <NavLink href="/about" exact className="text-md font-light">
              About
            </NavLink>
            <NavLink href="/contact" exact className="text-md font-light">
              Contact
            </NavLink>
            <NavLink href="/works" exact className="text-md font-light">
              Works
            </NavLink>
            <NavLink href="/resume" exact className="transition px-5 py-4 bg-primary rounded-lg text-white hover:bg-transparent border hover:border-primary hover:text-primary outline-none">
              Get A Card
            </NavLink>
          </ul>
        </div>

        <div className="lg:hidden block">
          <Dropdown>
            <DropdownTrigger>
              <div className="w-14 h-14 glassy-header rounded-xl flex items-center justify-center border-2 border-primary">
                <IconMenu2
                  className="text-primary"
                  size={30} />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem key="home" href="/">Home</DropdownItem>
              <DropdownItem key="skills" href="/skills">Skills</DropdownItem>
              <DropdownItem key="portfolio" href="/portfolio">Portfolio</DropdownItem>
              <DropdownItem key="contact" href="/contact"> Contact</DropdownItem>
              <DropdownSection>
                <DropdownItem key="resume" href="/resume" >
                  <div className="w-full flex flex-row items-center justify-center bg-primary py-3 rounded-lg">
                    <p className="text-white">Resume</p>
                  </div>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header >
  )
}
