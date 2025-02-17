"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import AppointmentItem from "./appointment-item";

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const appointments = [
    {
      time: "10:00-13:00",
      title: "Design new UX flow for Michael",
      description: "Start from screen 16",
    },
    {
      time: "14:00-15:00",
      title: "Brainstorm with the team ",
      description: "Define the problem or question that...",
    },
    {
      time: "19:00-20:00",
      title: "Workout with Ella",
      description: "We will do the legs and back workout",
    },
  ];

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="pt-6 px-0"
      />
      <div className="mt-6 space-y-4">
      {appointments.map((appointment, index) => (
        <AppointmentItem key={index} {...appointment} />
      ))}
      </div>
    </>
  );
}
