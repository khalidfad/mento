import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PersonalityType() {
  return (
    <>
      <h2 className="text-dark-500 text-2xl text-center font-medium mb-10">
        What best describes you
      </h2>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="artist">Artist</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="footballer">Footballer</SelectItem>
            <SelectItem value="trader">Trader</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
