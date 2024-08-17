"use client";

import { useState } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { ActivityForm } from "@/components/ActivityForm";
import { createActivity } from "@/utils/helpers";
import { toast } from "react-hot-toast";

export default function NewActivity() {
  const router = useRouter();
  const store = useStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (activity: Activity) => {
    setIsLoading(true);
    try {
      await createActivity(activity);
      toast.success("Activity logged successfully!");
      router.push("/activities");
    } catch (error) {
      console.error("Error creating activity:", error);
      toast.error("Failed to log activity. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Log New Activity</h1>
      <ActivityForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}