import React from "react";
import "./Service.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image from "next/image";
import { Button } from "../ui/button";

const Service = () => {
  const services = [
    { label: "web development", icon: "/webdev.svg" },
    { label: "video editing", icon: "/videoEditing.svg" },
    { label: "thumbnail design", icon: "/thumbnail.svg" },
    { label: "figma desing", icon: "/figma.svg" },
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
            What Makes <span className="rounded-md bg-primary">Midmotion</span>{" "}
            Different.
          </h2>
          <p className="paragraph">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero at tempus, blandit posuere ligula varius congue cursus
            porta feugiat
          </p>
        </div>
        <div>
          <div id="serviceWrapper">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid gap-5 text-center border place-items-center hover:border-primary"
              >
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={100}
                  height={100}
                  className="object-contain h-auto max-w-[100px] m-auto p-5"
                />
                <h4 className="capitalize subtitle">{service.label}</h4>
                <Button className="button" size="lg">
                  hire us
                </Button>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
