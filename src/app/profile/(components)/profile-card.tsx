import { MailIcon, MapPin } from "lucide-react";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  image: string;
  type: string;
  email: string;
  location?: string;
  phone?: string;
}

export default function ProfileCard({
  name,
  image,
  type,
  email,
  location,
  phone,
}: ProfileCardProps) {
  const iconClasses = "text-primary size-6 mr-4";
  const iconTextClasses = "text-base text-dark-500 font-medium";

  return (
    <>
      <div className="flex justify-between gap-3 mb-5">
        <div className="flex flex-col">
          <p className="text-base text-dark-600/90 mb-1">{type}</p>
          <h3 className="text-2xl text-dark-600 font-medium">{name}</h3>
        </div>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full object-cover shrink-0 size-[100px]"
        />
      </div>
      <div className="space-y-5">
        <div className="flex items-center">
          <MailIcon className={iconClasses} />
          <p className={iconTextClasses}>{email}</p>
        </div>
        <div className="flex items-center">
          <MapPin className={iconClasses} />
          <p className={iconTextClasses}>{location}</p>
        </div>
        <div className="flex items-center">
          <MailIcon className={iconClasses} />
          <p className={iconTextClasses}>{phone}</p>
        </div>
      </div>
    </>
  );
}
