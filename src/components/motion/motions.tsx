import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Icon } from "@iconify/react";

export const MotionTextBounceIn = ({
  ref,
  data,
}: {
  ref: React.RefObject<HTMLUListElement> | React.RefObject<null>;
  data: string[];
}) => {
  const isInView = useInView(ref, { once: true });

  return data.map((item, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        bounce: 0.4,
      }}
      className="p-2 bg-[#96c346] text-white h-10 text-nowrap rounded-sm flex items-center justify-center"
    >
      {item}
    </motion.li>
  ));
};

export const MotionIconIn = ({
  ref,
  data,
  size = 50,
}: {
  isIcon?: boolean;
  ref: React.RefObject<HTMLUListElement> | React.RefObject<null>;
  data: string[];
  size?: number;
}) => {
  const isInView = useInView(ref, { once: true });

  return data.map((item, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        bounce: 0.4,
      }}
      className="flex items-center justify-center"
    >
      <Icon icon={item} width={size} height={size} />
    </motion.li>
  ));
};
