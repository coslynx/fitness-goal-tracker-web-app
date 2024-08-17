"use client";

import { useState } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { GoalForm } from "@/components/GoalForm";
import { createGoal } from "@/utils/helpers";
import { toast } from "react-hot-toast";

export default function NewGoal() {
  const router = useRouter();
  const store = useStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (goal: Goal) => {
    setIsLoading(true);
    try {
      await createGoal(goal);
      toast.success("Goal created successfully!");
      router.push("/goals");
    } catch (error) {
      console.error("Error creating goal:", error);
      toast.error("Failed to create goal. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Goal</h1>
      <GoalForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}