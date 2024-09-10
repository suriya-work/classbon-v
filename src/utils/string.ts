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


// import React, { ComponentPropsWithRef, ForwardedRef, ReactNode } from "react";
// import { cn } from "@/utils";

// interface IInputProps extends ComponentPropsWithRef<"input"> {
//   error?: boolean;
//   helperText?: string;
//   label?: string;
//   icon?: ReactNode;
//   ref: ForwardedRef<HTMLInputElement>;
//   labelClassName?: string;
// }

// function Input({
//   error,
//   helperText,
//   label,
//   disabled,
//   name,
//   icon,
//   ref,
//   className,
//   labelClassName,
//   dir = "rtl",
//   ...rest
// }: IInputProps) {
//   return (
//     <div className="flex flex-col">
//       {label && (
//         <label
//           className={`mb-0 text-right text-sm text-black ${labelClassName}`}
//           htmlFor={name}
//         >
//           {label}
//         </label>
//       )}
//       <div className="relative  flex  items-center justify-start  ">
//         {icon && (
//           <div className="max-w-5 absolute right-1 top-1/2 -translate-y-1/2  overflow-hidden ">
//             {icon}
//           </div>
//         )}
//         <input
//           {...rest}
//           className={cn(
//             " border-sm rounded-sm border-gray px-2 py-[6px] text-xs placeholder:text-primary focus:border-secondary focus:outline-none focus:ring-0",
//             {
//               "pr-6": icon,
//               "border-danger": error,
//               "bg-lightGray": disabled,
//               " placeholder:text-right": dir === "rtl",
//               " placeholder:text-left": dir === "ltr",
//             },

//             className,
//           )}
//           ref={ref}
//         />
//       </div>
//       {helperText && (
//         <span className={cn("text-xs text-primary", { "text-danger": error })}>
//           {helperText}
//         </span>
//       )}
//     </div>
//   );
// }

// export const TextInput = React.forwardRef(Input);
