import { ScrollToTopButton } from "@/components/button";
import { Navigation } from "@/components/layout/Navigation";
import { contentSchema } from "./schema";
import { Section } from "@/components/section";

export const DashboardContainer = () => {
  return (
    <div className="bg-gray-50 relative">
      <Navigation />
      <Contents />
      <ScrollToTopButton />
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
