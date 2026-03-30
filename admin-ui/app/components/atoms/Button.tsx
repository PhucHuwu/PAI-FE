import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-[10px] font-semibold transition-all cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white border border-[#fb7104] shadow-sm",
    outline: "bg-[rgba(247,148,45,0.1)] text-[#f17412] border border-[#fb7104] shadow-sm",
    ghost: "bg-transparent text-[#ba252e] hover:bg-[#fff1e4]",
  };
  const sizes = {
    sm: "px-3 py-1 text-[14px]",
    md: "px-4 py-2 text-[16px]",
    lg: "px-6 py-2 text-[18px]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
