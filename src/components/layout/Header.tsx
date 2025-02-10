import { Icon } from "@iconify/react";
import { resume } from "@/constants/resume";

export const Header = () => {
  return (
    <div className="font-bold text-center sm:text-left flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-white text-4xl font-bold">
        Hi, I am <span className="text-theme">Firnaz Luztian Adiansyah</span>
      </h1>
      <p className="text-white text-xl font-bold">
        <span className="text-theme font-bold">a software engineer</span> with a
        passion for building scalable and efficient systems.
      </p>
      <SocialMedia />
    </div>
  );
};

const SocialMedia = () => {
  const { socialMedia } = resume;
  return (
    <div className="flex gap-4 mt-10">
      {socialMedia.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          title={item.title}
          rel="noopener noreferrer"
          className="text-black bg-transparent border border-white hover:bg-[#96c346] transition-colors rounded-full bg-white p-4"
        >
          <Icon icon={item.icon} width={24} height={24} />
        </a>
      ))}
    </div>
  );
};
