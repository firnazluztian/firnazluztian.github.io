import { cn } from "@/utils";

export const Section = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={cn("h-screen flex flex-col px-4", className)}>
      {title && (
        <div className="pt-24 pb-8 text-center">
          <h1 className="text-4xl font-bold max-sm:hidden">{title}</h1>
        </div>
      )}
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </section>
  );
};