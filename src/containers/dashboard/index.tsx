import { useEffect, useState, useCallback } from "react";
import { ScrollToTopButton } from "@/components/button";
import { Navigation } from "@/components/layout/Navigation";
import { contentSchema } from "./schema";
import { Section } from "@/components/section";
import ContactModal from "@/components/modal/ContactModal";

export const DashboardContainer = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight - 10 && !modalShown) {
      setShowContactModal(true);
      setModalShown(true);
    }
  }, [modalShown]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="bg-gray-50 relative">
      <Navigation />
      <Contents />
      <ScrollToTopButton />
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

const Contents = () => {
  return contentSchema.map(({ id, title, showTitle = true, children, styles }, idx) => (
    <Section key={idx} id={id} title={showTitle ? title : undefined} className={styles}>
      {children}
    </Section>
  ));
};
