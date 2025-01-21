import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { genericOptions } from "@/constants/profile";

export default function StepThree() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="flex flex-col gap-4">
        <Label htmlFor="profession">
          Job profession <span className="text-red-600">*</span>
        </Label>
        <Input type="text" id="profession" className="w-full" />
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
        <Label htmlFor="why">
          Why do you want a mentor <span className="text-red-600">*</span>
        </Label>
        <Input type="text" id="why" className="w-full" />
      </div>
    </div>
  );
}
