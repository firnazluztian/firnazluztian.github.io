import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";
import { resume } from "@/constants/resume";
import { useRouter } from "next/navigation";

interface ProjectImage {
  src: string;
  isPortrait?: boolean;
}

export const Projects = () => {
  const { sideProjects } = resume.projects;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const router = useRouter();

  const separateImages = (images: string[]) => {
    return images.reduce<{
      portrait: ProjectImage[];
      landscape: ProjectImage[];
    }>(
      (acc, img) => {
        // Check if image path includes indicators of portrait orientation
        const isPortrait =
          img.toLowerCase().includes("android") ||
          img.includes("p1") ||
          img.includes("p2") ||
          img.includes("p3") ||
          img.includes("p4");

        const imageObj = { src: img, isPortrait };
        if (isPortrait) {
          acc.portrait.push(imageObj);
        } else {
          acc.landscape.push(imageObj);
        }
        return acc;
      },
      { portrait: [], landscape: [] }
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {sideProjects.map((project, index) => {
          const { portrait, landscape } = separateImages(project.imgs);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 1, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16"
            >
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-theme mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Portrait Images */}
              {portrait.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
                  {portrait.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 1, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                      className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <Image
                        src={img.src}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        fill
                        className="object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Landscape Images */}
              {landscape.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {landscape.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 1, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                      className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <Image
                        src={img.src}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        fill
                        className="object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Centered Check Demo Apps Button */}
        <div className="flex justify-center mt-8">
          <motion.a
            onClick={() => router.push("/project")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-theme text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 cursor-pointer"
          >
            Check demo apps
          </motion.a>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative w-full h-full max-h-[90vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged project image"
                fill
                className="object-contain"
                quality={100}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
