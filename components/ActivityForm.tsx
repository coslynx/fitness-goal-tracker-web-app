"use client";

import { useState } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { createActivity } from "@/utils/helpers";
import { toast } from "react-hot-toast";

interface ActivityFormProps {
  onSubmit: (activity: Activity) => void;
  isLoading?: boolean;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const router = useRouter();
  const store = useStore();

  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [goalId, setGoalId] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const activity: Activity = {
      type,
      duration: parseInt(duration),
      calories: parseInt(calories),
      date: new Date(date),
      userId: store.user!.id,
      goalId,
    };

    onSubmit(activity);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Activity Type
        </label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700"
        >
          Duration (minutes)
        </label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="calories"
          className="block text-sm font-medium text-gray-700"
        >
          Calories Burned
        </label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="goalId"
          className="block text-sm font-medium text-gray-700"
        >
          Goal
        </label>
        <select
          id="goalId"
          value={goalId}
          onChange={(e) => setGoalId(parseInt(e.target.value))}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value={null}>None</option>
          {store.goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="primary" isLoading={isLoading}>
        Log Activity
      </Button>
    </form>
  );
};