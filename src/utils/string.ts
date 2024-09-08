export function generateID(): string {
  return Math.random().toString(36).substring(2 , 9) + '' + new Date() .getTime();
}

// import { ButtonProps } from "@/types";
// import { cn } from "@/utils";
// import React from "react";

// export const Button: React.FC<ButtonProps> = ({
//   className,
//   children,
//   color = "secondary",
//   variant = "contained",
//   size = "sm",
//   ...rest
// }: ButtonProps) => {
//   const styleMap = {
//     primary: {
//       contained: "bg-primary text-white",
//       outlined: "border-primary border-sm text-primary",
//     },
//     secondary: {
//       contained: "bg-secondary text-white",
//       outlined: "border-secondary border-sm text-secondary",
//     },
//   };

//   const sizeMap = {
//     sm: "text-sm px-[14px] py-[10px] rounded-sm",
//     lg: "text-base px-4 py-4 font-semibold rounded-xl",
//   };

//   const buttonStyle = styleMap[color][variant];

//   return (
//     <div>
//       <button
//         className={cn(
//           `${buttonStyle} ${sizeMap[size]} cursor-pointer`,
//           className,
//         )}
//         {...rest}
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

// export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: React.ReactNode;
//   className?: string;
//   variant?: "contained" | "outlined";
//   color?: "primary" | "secondary";
//   size?: "sm" | "lg";
// };


// "clsx": "^2.0.0",
// "google-map-react": "^2.2.1",
// "next": "14.0.3",
// "react": "^18",
// "react-dom": "^18",
// "react-multi-carousel": "^2.8.4",
// "tailwind-merge": "^2.1.0",


// import { clsx, ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }