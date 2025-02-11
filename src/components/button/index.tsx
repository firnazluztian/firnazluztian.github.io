import { ButtonHTMLAttributes, useState, useEffect } from 'react';
import { cn } from '@/utils';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "error" | "gray";
}

const colors = {
  primary: 'bg-indigo-600 w-fit justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  secondary: 'bg-secondary-50 border-secondary-50 text-secondary-foreground hover:bg-secondary-40 active:bg-secondary-80 focus:bg-secondary-60',
  neutral: 'bg-neutral-50 border-neutral-30 text-neutral-foreground hover:bg-neutral-40 active:bg-neutral-80 focus:bg-neutral-60',
  success: 'bg-success-50 border-success-50 text-success-foreground hover:bg-success-40 active:bg-success-80 focus:bg-success-60',
  warning: 'bg-warning-50 border-warning-50 text-warning-foreground hover:bg-warning-40 active:bg-warning-80 focus:bg-warning-60',
  error: 'bg-error-50 border-error-50 text-error-foreground hover:bg-error-40 active:bg-error-80 focus:bg-error-60',
  gray: 'bg-gray text-gray-foreground border-gray hover:bg-gray-40 active:bg-gray-80 focus:bg-gray-60',
}

export const Button = ({ 
  color = "primary", 
  variant = "default",
  className,
  ...props 
}: ButtonProps) => {
  const variantClass = colors[color] || colors.primary;
  return (
    <button 
      className={cn(variantClass, variant, className)}
      {...props}
    />
  )
}

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#96c346] hover:opacity-60 text-white rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

