import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Icon } from "@iconify/react";

import { useEffect, useState } from "react";

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const revealRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const staggerContainer = (stagger = 0.12): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.05,
    },
  },
});

export const panelReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export const TypeWriter = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 1000,
  className = "",
}: TypeWriterProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const tick = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      let delta = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === fullText) {
        delta = delayBetweenTexts;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      timeout = setTimeout(tick, delta);
    };

    timeout = setTimeout(tick, 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className={`relative ${className}`}>
      {text}
      <span className="absolute right-[-4px] w-[2px] h-[80%] top-[10%] bg-theme animate-blink"></span>
    </span>
  );
};

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

export const MotionCount = ({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const startAt = performance.now();
    const duration = 1200;

    const tick = (time: number) => {
      const progress = Math.min((time - startAt) / duration, 1);
      setDisplay(Math.round(progress * value));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [value]);

  return (
    <motion.span className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      {display}
      {suffix}
    </motion.span>
  );
};
