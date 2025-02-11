import { useState, useEffect } from "react";
import { contentSchema } from "@/containers/dashboard/schema";
import { Icon } from "@iconify/react";
import { resume } from "@/constants/resume";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);

  const { downloadLink } = resume;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = contentSchema.map(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id,
          top: Math.abs(rect.top), // Get absolute distance from top
        };
      });

      // Find the section closest to the top of the viewport
      const closest = sections.reduce((prev, curr) =>
        prev.top < curr.top ? prev : curr
      );

      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setHidden(!hidden)}
        className="bg-theme text-white px-4 py-2 rounded-md sm:hidden text-right fixed top-5 right-5 z-50"
      >
        <Icon icon="codicon:three-bars" width={24} height={24} />
      </button>
      {!hidden && (
        <nav className="fixed w-full flex max-sm:flex-col max-sm:bg-white justify-between text-center items-center p-4 bg-white shadow-md z-40">
          <DayTime />
          <ul className="max-sm:flex-col no-list-style flex items-center justify-center gap-4">
            {contentSchema.map(({ id, title }, idx) => (
              <li
                key={idx}
                className={`cursor-pointer transition-colors hover:text-theme ${
                  activeSection === id
                    ? `text-theme font-medium`
                    : "text-gray-600"
                }`}
                onClick={() => scrollToSection(id)}
              >
                {title}
              </li>
            ))}
            <button className="bg-theme text-white px-4 py-2 rounded-md">
              <a
                href={downloadLink}
                target="_blank"
                title="SoftwareEngineer_FirnazLuztian_Resume"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
            </button>
          </ul>
        </nav>
      )}
    </>
  );
};

const DayTime = () => {
  const singaporeTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Singapore",
  });

  const singaporeHour = new Date(singaporeTime).getHours();
  const isDay = singaporeHour >= 6 && singaporeHour < 18; // Day is between 6 AM and 6 PM

  const icons = isDay
    ? "meteocons:clear-day-fill"
    : "meteocons:clear-night-fill";

  return (
    <div className="max-sm:hidden flex items-center gap-2">
      <Icon icon={icons} width={40} height={40} />
      <p className="text-sm text-gray-500">in Singapore</p>
    </div>
  );
};
