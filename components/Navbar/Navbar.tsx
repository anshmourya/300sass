"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import React, { useMemo, useState } from "react";
import saaslogo from 'next/300saas.jpg'
import "../Navbar/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";
import { Button } from "../ui/button";
import Timer from "../ui/Timer";
const NavBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const menuItems = useMemo(
    () => [
      { id: 1, text: "Home", href: "home" },
      { id: 3, text: "Know us", href: "whoWeAre" },
      { id: 4, text: "Service", href: "service" },
      { id: 5, text: "Contact Us", href: "contactUs" },
      { id: 6, text: "About Us", href: "aboutUs" },
    ],
    []
  );

  return (
    <header className="flex items-center justify-start w-full p-2 bg-transparent border-b">
      <div className="logo">
        
       <h1 className="text-4xl text-gradient">
          300<span className="gradient-text">saas</span>
        </h1>
      </div>
      
      <a href="https://twitter.com/join300saas" target="_blank" rel="noopener noreferrer" className="mb-6">
  <img src="/icons8-twitter.svg" width={25} height={25} alt="" className="lg:left-1/2 absolute max-md:right-4" />
</a>


      <Timer />
      
    </header>
  );
};

export default NavBar;
