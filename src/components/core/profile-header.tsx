import { BadgeCheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfileHeaderProps {
  name: string;
  image: string;
  tagline: string;
  isVerified: boolean;
  category: string;
  rating: string;
  meetingLink: string;
}

export default function ProfileHeader({
  name,
  image,
  tagline,
  isVerified,
  category,
  rating,
  meetingLink,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col bg-primary/10 pt-7 px-5 pb-11">
      <div className="flex items-center gap-3 mb-7">
        <Image
          src={image}
          alt={name}
          width={130}
          height={130}
          className="rounded-full aspect-square"
        />
        <div>
          <div className="flex items-center">
            <h3 className="text-xl text-dark-600 font-medium">{name}</h3>
            {isVerified && (
              <BadgeCheckIcon className="text-primary ml-2" size={16} />
            )}
          </div>
          <p className="text-dark-600 text-lg">{tagline}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-300">
        <div className="flex flex-col justify-center pr-5">
          <p className="text-dark-600 text-lg font-medium">Category</p>
          <p className="text-dark-600/60 text-lg">{category}</p>
        </div>
        <div className="flex items-center px-5 gap-2.5">
          <StarIcon className="size-5 stroke-1" /> {rating}
        </div>
        <div className="flex flex-col justify-center">
          <Link href={meetingLink} className="pl-5 inline-flex">
            <Image
              src="/images/icons/google-meet.png"
              alt="Google Meet"
              width={36}
              height={36}
              className="m-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
