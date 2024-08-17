"use client";

import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  isLoading = false,
}) => {
  const className = `px-4 py-2 rounded-md font-medium text-white ${
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-700"
      : variant === "secondary"
      ? "bg-gray-500 hover:bg-gray-700"
      : variant === "tertiary"
      ? "bg-green-500 hover:bg-green-700"
      : ""
  }`;

  return (
    <button
      disabled={isLoading}
      className={className}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-2"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-75"
              cx="12"
              cy="12"
              r="10"
              strokeLinecap="round"
            />
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};