"use client";

import "./styles/styles.scss";
import Navbar from "@/components/Navbar/Navbar";

import HeroSection from "@/components/HeroSection/HeroSection";
import Service from "@/components/Service/Service";
import { ToastContainer } from 'react-toastify';
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <ToastContainer />
    </>
  );
}
