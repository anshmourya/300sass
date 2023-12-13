import React from "react";
import "./Service.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import { Button } from "../ui/button";

const Service = () => {
  const services = [
    {
      label: "Credit Crescendo: $10K SaaS Boost!",
      icon: "/webdev.svg",
      description:
        "Unlock $10000 worth of credits for top saas tools. Organize, strategize, and boost your productivity to new heights. Streamline your operations seamlessly!",
    },
    {
      label: "Tool Talk: Expert Reviews Await!",
      icon: "/videoEditing.svg",
      description:
        "Get your tools critiqued by top investors, YC-funded entrepreneurs, and industry leaders. Exclusive monthly reviews await you, offering invaluable insights and exposure.",
    },
    {
      label: "Shine Bright on 300saas!",
      icon: "/thumbnail.svg",
      description:
        "Don't just list your tool; amplify it. Featuring on 300saas means exposure to tech influencers and potential investors. Watch as your visibility soars and your traffic spikes",
    },
    {
      label: "Grow with Proven Strategies!",
      icon: "/figma.svg",
      description:
        "Tap into the collective wisdom of successful startup veterans.  Gain exclusive access to growth strategies and scaling tips proven to succeed. Flash Card 5",
    },
    {
      label: "Connect & Conquer!",
      icon: "/figma.svg",
      description:
        "Join a vibrant community of SaaS innovators. Forge connections, collaborate, and open doors to new opportunities",
    },
    {
      label: "Innovate First: SaaS Exclusives!",
      icon: "/figma.svg",
      description:
        "Get early access to the latest SaaS products and features. Stay ahead of the curve and constantly innovate with 300saas.",
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
          <h2 className="mb-5 title">
            What Makes <span className="rounded-lg bg-yellowish gradient-text">300Sass</span>{" "}
            Different.
          </h2>
        </div>
        <div>
          <div id="serviceWrapper">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid gap-5 text-right border hover:border-primary"
              >
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={80}
                  height={80}
                  className="object-contain h-auto max-w-[100px] m-auto p-5"
                />
                <h4 className="capitalize subtitle">{service.label}</h4>
                {/* <Button className="button" size="lg">
                  hire us
                </Button> */}
                <p className="paragraph">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
