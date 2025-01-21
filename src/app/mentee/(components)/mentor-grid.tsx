import MentorCard from "@/components/core/mentor-card";

export default function MentorGrid() {
  const mentors = [
    {
      id: 1,
      name: "Adebimpe Ajayi",
      bio: "Founder of delight food, accountant with 7 years of experience",
      image: "/images/mentors/1.png",
      isVerified: true,
    },
    {
      id: 2,
      name: "Tobi Ademide",
      bio: "Principal founder of ash clothing and apparel for young millennials",
      image: "/images/mentors/2.png",
      isVerified: true,
    },
    {
      id: 3,
      name: "Wale Ojo",
      bio: "Founder of delight food, accountant with 7 years of experience",
      image: "/images/mentors/3.png",
      isVerified: true,
    },
    {
      id: 4,
      name: "Ayodeji Oguntade",
      bio: "Founder of delight food, accountant with 7 years of experience",
      image: "/images/mentors/4.png",
      isVerified: true,
    },
    {
      id: 5,
      name: "Richard S",
      bio: "Founder of delight food, accountant with 7 years of experience",
      image: "/images/mentors/5.png",
      isVerified: true,
    },
    {
      id: 6,
      name: "Korede Bello",
      bio: "Founder of delight food, accountant with 7 years of experience",
      image: "/images/mentors/6.png",
      isVerified: true,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="col-span-full">
        <h2 className="text-xl font-medium text-dark-600 mb-3">
          Matched mentors
        </h2>
      </div>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} {...mentor} />
      ))}
    </div>
  );
}
