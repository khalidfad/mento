import { Label } from "@/components/ui/label";
import { genericOptions } from "@/constants/profile";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function StepTwo() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="flex flex-col gap-4">
        <Label htmlFor="industry">
          Select your industry <span className="text-red-600">*</span>
        </Label>
        <Select>
          <SelectTrigger className="h-14 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {genericOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="education">
          Education level <span className="text-red-600">*</span>
        </Label>
        <Select>
          <SelectTrigger className="h-14 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {genericOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="employment">
          Employment status <span className="text-red-600">*</span>
        </Label>
        <Select>
          <SelectTrigger className="h-14 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {genericOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
