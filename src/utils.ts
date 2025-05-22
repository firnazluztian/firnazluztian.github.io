import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const calculateYearsOfExperience = (startYear: number): string => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const yearsOfExperience = currentYear - startYear;
  
  // If we're past June (month > 5), show exact years, otherwise show "X+"
  return currentMonth > 5 ? `${yearsOfExperience}` : `${yearsOfExperience}+`;
};