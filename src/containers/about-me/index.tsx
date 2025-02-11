import { useRef } from "react";
import { resume } from "@/constants/resume";
import { MotionTextBounceIn, MotionIconIn } from "@/components/motion/motions";

export const AboutMe = () => {
  return (
    <div className="w-[50em] m-auto">
      <Content />
    </div>
  );
};

const Education = () => {
  const { projects } = resume;
  return projects.qualifications.map((item, idx) => (
    <div key={idx} className="flex-col gap-2">
      <h3 className="font-bold text-theme">{item.title}</h3>
      <p className="text-xs">{item.subtitle}</p>
    </div>
  ));
};

const Content = () => {
  const competenciesRef = useRef(null);
  const skillsRef = useRef(null);
  const { description, competencies, skills } = resume.aboutMe;

  return (
    <div className="flex flex-col gap-8">
      <p>{description}</p>
      <h3 className="text-md font-bold">Education</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Education />
      </div>
      <h3 className="text-md font-bold">Core competencies</h3>
      <div ref={competenciesRef} className="flex flex-wrap gap-3">
        <MotionTextBounceIn data={competencies} ref={competenciesRef} />
      </div>
      <h3 className="text-md font-bold">My Skills</h3>
      <div ref={skillsRef} className="flex flex-wrap gap-3">
        <MotionIconIn data={skills} ref={skillsRef} size={80} />
      </div>
    </div>
  );
};
