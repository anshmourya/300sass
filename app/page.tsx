"use client";
import { useEffect, useState, useMemo } from "react";
import "./styles/styles.scss";
import Navbar from "@/components/Navbar/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import Service from "@/components/Service/Service";

export default function Home() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // console.log(mousePosition);
  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variant = useMemo(() => {
  //   return {
  //     default: {
  //       x: mousePosition.x - 16,
  //       y: mousePosition.y - 16,
  //     },
  //   };
  // }, [mousePosition]);
  // const cursorStyle = {
  //   transform: `translate(${mousePosition.x - 16}px, ${
  //     mousePosition.y - 16
  //   }px)`,
  // };
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      {/* <div className="cursor-outer" style={cursorStyle}></div>
      <div className="cursor-inner" style={cursorStyle}></div> */}
    </>
  );
}
