import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "green" | "red" | "gray" | "pending";
  className?: string;
}

export function Badge({ children, variant = "orange", className = "" }: BadgeProps) {
  const variants = {
    orange: "bg-[#fb7104] text-white",
    green: "bg-green-500 text-white",
    red: "bg-[#ba252e] text-white",
    gray: "bg-gray-400 text-white",
    pending: "bg-transparent border border-[#fb7104] text-[#fb7104]",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
