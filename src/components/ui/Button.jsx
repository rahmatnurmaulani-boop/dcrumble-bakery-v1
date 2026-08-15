import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-2xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary: "bg-rose-900 text-white hover:bg-rose-700 hover:shadow-lg",
    secondary: "bg-rose-100 text-rose-900 hover:bg-rose-200",
    outline:
      "border border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
