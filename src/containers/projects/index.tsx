import Image from "next/image";
import { useRef } from "react";
import { resume } from "@/constants/resume";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Projects = () => {
  return (
    <div className="w-[50em] m-auto">
      <div className="w-full grid gap-10">
        <Content />
        <h3 className="text-md font-bold">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Certifications />
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const { projects } = resume;

  return projects.certifications.map((item, idx) => (
    <div key={idx} className="flex gap-2 items-center">
      <Icon icon={item.icon} width={50} height={50} />
      <h3 className="text-md">{item.title}</h3>
    </div>
  ));
};

const Content = () => {
  const ref = useRef(null);
  const { projects } = resume;

  return projects.experiences.map((item, idx) => (
    <div key={idx} ref={ref}>
      <div className="items-center rounded-lg bg-white p-4 shadow-sm flex gap-2">
        <Image
          src={item.companyIcon}
          alt={item.company}
          width={100}
          height={100}
        />
        <div>
          <h3 className="text-md font-bold text-theme">{item.company}</h3>
          <p>{item.position}</p>
        </div>
      </div>
    </div>
  ));
};
