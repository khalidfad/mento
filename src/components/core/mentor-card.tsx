import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";

interface MentorCardProps {
  id: number;
  name: string;
  image: string;
  bio: string;
  isVerified: boolean;
}

export default function MentorCard(props: MentorCardProps) {
  const { name, image, bio, isVerified } = props;

  return (
    <div className="flex flex-col cursor-pointer shrink-0 group">
      <Image
        src={image}
        alt={name}
        width={164}
        height={181}
        className="mb-3 rounded-lg size-full"
      />
      <div className="flex items-center mb-3">
        <h3 className="text-base text-dark-600 font-medium">{name}</h3>
        {isVerified && (
          <BadgeCheckIcon className="text-primary ml-2" size={16} />
        )}
      </div>
      <p className="text-base text-dark-500 font-light">{bio}</p>
    </div>
  );
}
