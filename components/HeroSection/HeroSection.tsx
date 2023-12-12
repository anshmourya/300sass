import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import { Input } from "@/components/ui/input";
const HeroSection = () => {
  const el = useRef(null);
  //typing text animation
  useEffect(() => {
    // Create a Typed instance here
    const typed = new Typed(el.current, {
      strings: ["showcase your gem.", "make inovation."],
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 100,
      loop: true,
    });

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="hero" className="grid h-screen place-items-center">
      <div className="shape-1">
        <Image src="/Mask.png" width={100} height={100} alt="mask image" />
      </div>
      <div className="shape-2">
        <Image src="/Mask.png" width={100} height={100} alt="mask image" />
      </div>
      <div className="m-auto text-center hero">
        <h1 className="my-6 header">
          Join our waitlist boost your saas visibility.
        </h1>
        <h1 className="my-6 title">
          and <span className="highlight-text" ref={el}></span>
        </h1>
        <p className="max-w-[60%] m-auto paragraph my-6">
          Crafting Digital Excellence, Frame by Frame.
        </p>
        <div className="flex justify-center my-10">
          <Input
            placeholder="Join us today..."
            className="h-11 max-w-[450px] bg-[#121212]"
          />
        </div>
        <Button className="button">Join us</Button>
        <div className="text-left mt-60">
          <h3 className="flex items-center header">
            <Button variant="link" className="header">
              <FaMailBulk />
            </Button>
            data@300saas.com
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
