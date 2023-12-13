import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import "../HeroSection/HeroSection.css"
const HeroSection = () => {
  // const el = useRef(null);
  // //typing text animation
  // useEffect(() => {
  //   // Create a Typed instance here
  //   const typed = new Typed(el.current, {
  //     strings: ["showcase your gem.", "make inovation."],
  //     typeSpeed: 100,
  //     backSpeed: 40,
  //     backDelay: 100,
  //     loop: true,
  //   });

  //   // Clean up the Typed instance on component unmount
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <section id="hero" className="grid h-screen place-items-center">
      <div className="shape-1">
        <Image src="/Mask.png" width={100} height={100} alt="mask image" />
      </div>
      <div className="shape-2">
        <Image src="/Mask.png" width={100} height={100} alt="mask image" />
      </div>
      <div className="m-auto text-center hero">
      
        <h1 className="my-6 header font-heading-font" >
          Join our waitlist to<br />  <span className="gradient-text">boost your SaaS journey</span>
        </h1> 
        <h1 className="my-6 title font-heading-font">
          
                    {/* and <span className="text-yellowish font-heading-font " ref={el} ></span> */}
                  </h1>
                  <p className="max-w-[60%] m-auto paragraph my-6 font-helvetica">
                  300SaaS platform is currently invite-only. Sign up to get early access!
                  </p>
                  <div className="flex justify-center my-10">
                    
                    <Input
                      placeholder="Email"
                      className="h-11 max-w-[450px] bg-[#121212]"
                    />
                  </div>
                  <Button className="p-4 text-xl transition-transform duration-500 ease-in-out transform hover:scale-110" style={{backgroundColor: "#88e73b"}}>Join us</Button>
                  <div className="text-left mt-60">
                    {/* <h3 className="flex items-center header">
                      <Button variant="link" className="header">
                        <FaMailBulk />
                      </Button>
                      data@300saas.com
                    </h3> */}
                  </div>
                </div>
              </section>
            );
          };

          export default HeroSection;
