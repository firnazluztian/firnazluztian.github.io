import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { resume } from "@/constants/resume";

export const Activities = () => {
  const { activities } = resume;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {activities?.map((activity, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 1, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {activity.img.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 1, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                  className="relative aspect-square rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Image
                    src={img}
                    alt={`${activity.title} photo ${imgIndex + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-md sm:text-xl font-bold">
                {activity.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 