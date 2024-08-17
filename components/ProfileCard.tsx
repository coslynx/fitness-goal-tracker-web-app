"use client";

import { useState } from "react";
import { useStore } from "@/store";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface ProfileCardProps {
  user: User | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const router = useRouter();
  const store = useStore();

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // TODO: Implement logic to save user profile updates
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white">
      <div className="flex items-center">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="ml-4">
          {isEditing ? (
            <div className="flex flex-col">
              <input
                type="email"
                value={user?.email || ""}
                className="border border-gray-300 rounded-md px-3 py-2"
                onChange={(e) => {
                  // TODO: Update user email in store
                }}
              />
              <div className="flex mt-2">
                <Button
                  variant="primary"
                  onClick={handleSave}
                  className="mr-2"
                >
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold">{user?.email}</h2>
              <p className="text-gray-600">Member since {new Date().getFullYear()}</p>
              <Button variant="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};