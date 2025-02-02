import { InstagramIcon, LinkedinIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

export interface AboutCardProps {
  bio: string;
  instagram: string;
  linkedin: string;
  external: string;
}

export default function Aboutcard({
  bio,
  instagram,
  linkedin,
  external,
}: AboutCardProps) {
  const iconWrapClasses =
    "size-9 inline-flex flex-col justify-center items-center bg-gray-200 rounded-full";
  return (
    <div className="flex flex-col gap-7 pb-6 border-b border-gray-300">
      <div className="flex items-center gap-3">
        <h2 className="text-xl text-dark-600 font-medium">About</h2>
        <div className="flex items-center gap-3">
          {instagram && (
            <span className={iconWrapClasses}>
              <Link href={instagram}>
                <InstagramIcon className="size-6" />
              </Link>
            </span>
          )}
          {linkedin && (
            <span className={iconWrapClasses}>
              <Link href={linkedin}>
                <LinkedinIcon className="size-6" />
              </Link>
            </span>
          )}
          {external && (
            <span className={iconWrapClasses}>
              <Link href={external}>
                <LinkIcon className="size-6" />
              </Link>
            </span>
          )}
        </div>
      </div>
      <p className="text-base text-dark-600">{bio}</p>
    </div>
  );
}
