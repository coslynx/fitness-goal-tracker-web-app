"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/store";
import { ProfileCard } from "@/components/ProfileCard";
import { getGoals, getActivities } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const store = useStore();

  const [goals, setGoals] = useState<Goal[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchGoals = async () => {
    const data = await getGoals();
    setGoals(data);
  };

  const fetchActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    if (store.user) {
      fetchGoals();
      fetchActivities();
    }
  }, [store.user]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>

      <ProfileCard user={store.user} />

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">My Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">My Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}