"use client"

import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface AppointmentItemProps {
  title: string;
  description: string;
  time: string;
}

export default function AppointmentItem({
  title,
  description,
  time,
}: AppointmentItemProps) {
  const [randomColor, setRandomColor] = useState<string | null>(null);
  const colors = [
    "border-red-500",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-indigo-500",
    "border-purple-500",
    "border-primary",
  ];

  useEffect(() => {
    // Generate the random color only on the client side to avoid SSR issues
    const color = colors[Math.floor(Math.random() * colors.length)]
    setRandomColor(color);
  }, []);

  return (
    <div className="flex justify-between p-3">
      <div>
        <div className="flex items-center mb-2">
          <div
            className={`size-3.5 bg-white rounded-full border-4 ${randomColor}`}
          />
          <p className="text-sm text-dark-500/70 font-semibold ml-2">{time}</p>
        </div>
        <h3 className="text-lg text-dark-600 mb-2">{title}</h3>
        <p className="text-sm text-dark-500/70">{description}</p>
      </div>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
      </Button>
    </div>
  );
}
