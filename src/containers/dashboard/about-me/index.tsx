import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { resume } from "@/constants/resume";

export const AboutMe = () => {
  const { qualifications } = resume.projects;
  const { description, skills, competencies } = resume.aboutMe;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* About Section */}
        <div className="grid md:grid-cols-1 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="order-2 md:order-1 space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
              <div className="grid gap-4">
                {qualifications.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="transition-shadow duration-300"
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-theme mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {edu.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Tech Stacks</h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 place-items-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <Icon
                  icon={skill}
                  width={100}
                  height={100}
                  className="text-gray-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Competencies Section */}
        <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Core Competencies</h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-gray-600 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  {competency}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
