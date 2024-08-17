"use client";

import React from "react";
import { useStore } from "@/store";
import { GoalCard } from "@/components/GoalCard";
import { ActivityCard } from "@/components/ActivityCard";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { getGoals, getActivities } from "@/utils/helpers";

export default function Home() {
  const router = useRouter();
  const store = useStore();

  const [goals, setGoals] = React.useState<Goal[]>([]);
  const [activities, setActivities] = React.useState<Activity[]>([]);

  const fetchGoals = async () => {
    const data = await getGoals();
    setGoals(data);
  };

  const fetchActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  React.useEffect(() => {
    if (store.user) {
      fetchGoals();
      fetchActivities();
    }
  }, [store.user]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome, {store.user?.email}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => {
            router.push("/goals/new");
          }}
        >
          Create New Goal
        </Button>
      </div>
    </div>
  );
}