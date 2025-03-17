import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { resume } from "@/constants/resume";

export const Experience = () => {
  const { experiences } = resume.projects;
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
            index={index}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = (props: { 
  experience: {
    company: string;
    location: string;
    position: string;
    companyIcon: string;
    descriptions: string[];
  };
  index: number;
  defaultOpen?: boolean;
}) => {
  const { experience, index, defaultOpen = false } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
    >
      {/* Header - Always visible */}
      <motion.div
        className={`p-6 cursor-pointer flex items-start gap-6 ${isOpen ? 'border-b border-gray-100' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-shrink-0 relative w-16 h-16 sm:w-20 sm:h-20">
          <Image
            src={experience.companyIcon}
            alt={experience.company}
            fill
            className="rounded-lg object-contain"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-theme">
              {experience.company}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 text-gray-500"
            >
              <Icon icon="mdi:chevron-down" className="w-6 h-6" />
            </motion.div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mt-1">
            {experience.position}
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            {experience.location}
          </p>
        </div>
      </motion.div>

      {/* Description - Expandable content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2">
              <ul className="space-y-3">
                {experience.descriptions.map((description, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-theme mt-1.5">
                      <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                    </span>
                    <span className="text-sm sm:text-base">{description}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 