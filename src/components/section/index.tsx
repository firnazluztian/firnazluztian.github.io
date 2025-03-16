import { cn } from "@/utils";

export const Section = ({
  id,
  title,
  children,
  className,
  fullWidth = false,
}: {
  id: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-screen flex flex-col",
        !fullWidth && "px-4 sm:px-6 lg:px-8",
        "py-16 sm:py-20",
        "overflow-hidden",
        className
      )}
    >
      {title && (
        <div className="pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        </div>
      )}
      <div className={cn(
        "flex-1 flex items-center justify-center",
        !fullWidth && "w-full max-w-7xl mx-auto"
      )}>
        {children}
      </div>
    </section>
  );
};