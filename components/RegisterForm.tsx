"use client";

import { useState } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { registerUser } from "@/utils/helpers";
import { toast } from "react-hot-toast";

interface RegisterFormProps {
  isLoading?: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  isLoading,
}) => {
  const router = useRouter();
  const store = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await registerUser({ email, password });
      toast.success("Registration successful! Please log in.");
      router.push("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Failed to register. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <Button type="submit" variant="primary" isLoading={isLoading}>
        Register
      </Button>
    </form>
  );
};