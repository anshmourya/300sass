import React from "react";
import "./Service.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import { Button } from "../ui/button";

const Service = () => {
  const services = [
    {
      label: "Boost business with exclusive perks & rewards",
      icon: "/reward.svg",
      description:
      "Unlock a range of unique benefits and incentives worth $10000 designed to accelerate your SaaS business's growth.",
    },
    {
      label: "Maximize exposure with enhanced visibility",
      icon: "/money.svg",
      description:
      "Gain prominent exposure to a targeted audience, boosting your product's awareness and reach.",  
    },
    {
      label: "Amplify reach with integrated marketing support",
      icon: "/magnify.svg",
      description:
      "Leverage our comprehensive marketing tools and expertise to effectively promote your SaaS solution.",
    },
    {
      label: "Connect with dedicated SaaS investors",
      icon: "/trend.svg",
      description:
      "Connect directly with investors interested in SaaS, opening doors to potential funding and partnerships.",
    },
    {
      label: "Benefit from expert review of your tools",
      icon: "/growth.svg",
      description:
      "Receive invaluable insights and feedback from industry experts to refine and improve your product.",
    },
    {
      label: "Expand and evolve within our community",
      icon: "/rocket.svg",
      description:
      "Join and grow within our vibrant community, benefiting from shared knowledge, networking, and support.",
    },
  ];
  return (
    <section
      id="service"
      className="mt-11 pt-28 pb-14"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="container m-auto text-center">
        <div className="max-w-[800px] m-auto">
          <h2 className="mb-5 title font-heading-font">
            What Makes <span className="rounded-lg bg-yellowish gradient-text font-heading-font">300SaaS</span>{" "}
            Different ?
          </h2>
        </div>
        <div>
          <div id="serviceWrapper">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid gap-5 text-right border hover:shadow-stone-400 shadow-left"
              >
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={80}
                  height={80}
                  className="object-contain h-auto max-w-[100px] m-auto p-5 text-white hover:text-green-400"
                />
                <h2 className="capitalize subtitle ">{service.label}</h2>
                {/* <Button className="button" size="lg">
                  hire us
                </Button> */}
                <p className="paragraph">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="opacity-30 text-2xl">and more...</p>
      </div>
      
    </section>
  );
};

export default Service;
