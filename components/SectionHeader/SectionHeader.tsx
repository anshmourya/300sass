import React from "react";
import "./SectionHeader.scss";
interface headers {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: headers) => {
  return (
    <div className="text-center" id="sectionHeader">
      <h3 className="capitalize">{title}</h3>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br />
        industry. Lorem Ipsum the industry&rsquo;s standard dummy text.
      </p>
    </div>
  );
};

export default SectionHeader;
