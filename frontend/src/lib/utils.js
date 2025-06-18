import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const convertDate = (date) => {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return formatted;
};
