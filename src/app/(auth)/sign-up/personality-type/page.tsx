"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function PersonalityType() {
  const router = useRouter();

  const handleChange = (value: string) => {
    console.log(value);
    router.push(`/new-profile`);
  };

  const options = [
    { value: "artist", label: "Artist" },
    { value: "teacher", label: "Teacher" },
    { value: "footballer", label: "Footballer" },
    { value: "trader", label: "Trader" },
  ];
  return (
    <>
      <h2 className="text-dark-500 text-2xl text-center font-medium mb-10">
        What best describes you
      </h2>

      <Select onValueChange={handleChange}>
        <SelectTrigger className="h-10 w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
