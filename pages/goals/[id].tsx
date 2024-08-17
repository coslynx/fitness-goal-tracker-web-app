"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { GoalCard } from "@/components/GoalCard";
import { getGoalById } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export default function GoalDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const store = useStore();

  const [goal, setGoal] = useState<Goal | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGoal = async () => {
    try {
      const data = await getGoalById(params.id);
      setGoal(data);
    } catch (error) {
      console.error("Error fetching goal:", error);
      // Handle error appropriately (e.g., display an error message)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (store.user) {
      fetchGoal();
    }
  }, [store.user]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center">Loading goal details...</p>
      </div>
    );
  }

  if (!goal) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center">Goal not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <GoalCard goal={goal} />
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            router.push("/goals");
          }}
        >
          Back to Goals
        </button>
      </div>
    </div>
  );
}