import Image from "next/image";

interface ReviewCardProps {
  name: string;
  image: string;
  review: string;
}

export default function ReviewCard({ name, image, review }: ReviewCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-5">
        <Image
          src={image}
          alt={name}
          width={77}
          height={77}
          className="rounded-full size-[77px] object-cover"
        />
        <h3 className="text-lg text-dark-600 font-medium">{name}</h3>
      </div>
      <p className="text-dark-600/60 text-lg">{review}</p>
    </div>
  );
}
