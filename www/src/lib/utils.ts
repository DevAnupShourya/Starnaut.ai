import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ? Utility function to convert file to Base64
export const toBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  if (typeof window === "undefined") {
    throw new Error("FileReader is not available on the server side.");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
