import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
const HeroSection = () => {
  const el = useRef(null);
  //typing text animation
  useEffect(() => {
    // Create a Typed instance here
    const typed = new Typed(el.current, {
      strings: ["Web Developemt.", "Video Editing.", "Thubmnail Making."],
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
          Crafting Digital Excellence, Frame by Frame.
        </h1>
        <h1 className="my-6 title">
          Best In <span className="highlight-text" ref={el}></span>
        </h1>
        <p className="max-w-[60%] m-auto paragraph my-6">
          Crafting Digital Excellence, Frame by Frame.
        </p>
        <div></div>
        <Button>Contact Us</Button>
        <div className="text-left mt-60">
          <h3 className="flex items-center header">
            <Button variant="link" className="header">
              <FaMailBulk />
            </Button>
            wmidmotion@gmail.com
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
