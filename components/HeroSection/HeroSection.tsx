import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import "../HeroSection/HeroSection.css"
import { blob } from "stream/consumers";
import { Client, Databases, ID } from "appwrite";
import { z } from 'zod';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

// Define the schema
const schema = z.object({
  email: z.string().email().min(6),
});
const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('657857ea1306b8743ef8') // Your project ID
;

// const promise = databases.listDocuments(
//   "6578580d5baf2395a5ec",
//   "6578581bde4a889d90b4",
//   ID.unique(),

// );

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
const HeroSection = () => {
  const [mail, setMail] = useState("");
  const handleChange = (e: any) => {
    setMail(e.target.value);
  }
  const handleSubmit = async () => {
    try {
      const data = schema.parse({ email: mail });
      if (mail === "") { 
        toast("Please enter your email")
        return;
      }

    

const promise = databases.createDocument(
  "6578580d5baf2395a5ec",
  "6578581bde4a889d90b4",
  ID.unique(),
  {
    email: data.email
  }

);
if (promise !== null) {

  toast.success("Thank you for joining us! We will get back to you soon.", {
    theme: "colored"
  })
}
setMail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.warn(error.errors[0].message, {theme: "colored"});
      } else {
        console.log(error);
      }
    }
  }


  return (
    <section id="hero" className="grid h-screen place-items-center">
      {/* <div className="shape-1">
        <Image src="/Mask.png" width={100} height={100} alt="mask image" />
      </div> */}
      {/* <div className="shape-2">
        <Image src="/Mask.png" width={100} height={100} alt="mask image" />
      </div> */}
      <div className="m-auto text-center hero h-1/2  w-1/2 ">
      
        <h1 className="text-6xl font-heading-fon max-md:text-5xl" style={{fontWeight: 500}}>
          Join our waitlist to<br />  <span className="gradient-text">boost your SaaS journey</span>
        </h1> 
        <h1 className="my-6 title font-heading-font">
          
                    {/* and <span className="text-yellowish font-heading-font " ref={el} ></span> */}
                  </h1>
                  <p className="max-w-[60%] m-auto paragraph my-6 font-helvetica max-md:text-xl">
                  300SaaS is currently invite-only. Sign up to get early access!
                  </p>
                  <div className="flex justify-center mt-10 mb-6">
                    
                    <Input
                      placeholder="Email"
                      className="h-11 max-w-[450px] bg-[#121212]"
                      
                      onChange={handleChange}
                      value={mail}
                    />
                  </div>
                  <Button className=" p-4 text-xl transition-transform duration-500 ease-in-out transform hover:scale-110" style={{backgroundColor: "#88e73b"}} onClick={handleSubmit}>Join waitlist</Button>
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
