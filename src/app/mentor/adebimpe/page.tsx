import Aboutcard from "@/components/core/about-card";
import DashboardTime from "@/components/core/dashboard-time";
import Greeting from "@/components/core/greeting";
import ProfileHeader from "@/components/core/profile-header";
import ReviewCard from "@/components/core/review-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

// TODO: Revert dir back to [id] folder once API is ready
// Using /adebimpe as a placeholder for now, to bypass NextJS  generateStaticParams() build error

export default function MentorPage() {
  const mentor = {
    name: "Adebimpe Ajayi",
    image: "/images/mentors/1.png",
    tagline: "Founder at Delight",
    isVerified: true,
    category: "Finance",
    rating: "5.0",
    meetingLink: "/",
  };

  const profileInfo = {
    bio: "Lorem ipsum dolor sit amet consectetur. Proin diam mattis risus sodales viverra in amet ipsum. Ultrices vel pharetra adipiscing sed at massa aliquet et. Ac mauris mauris consectetur maecenas risus sed sit. Diam id dictumst condimentum tristique mi sit ut est.",
    instagram: "#",
    linkedin: "#",
    external: "#",
  };

  const reviews = [
    {
      name: "Bisi Nasher",
      image: "/images/mentors/2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur. Proin diam mattis risus sodales viverra in amet ipsum. Ultrices vel pharetra adipiscing sed at massa aliquet et. Ac mauris mauris consectetur maecenas risus sed sit. Diam id dictumst condimentum tristique mi sit ut est.",
    },
    {
      name: "Dupe Olowo",
      image: "/images/mentors/3.png",
      review:
        "Lorem ipsum dolor sit amet consectetur. Proin diam mattis risus sodales viverra in amet ipsum. Ultrices vel pharetra adipiscing sed at massa aliquet et. Ac mauris mauris consectetur maecenas risus sed sit. Diam id dictumst condimentum tristique mi sit ut est.",
    },
    {
      name: "Tomiwa Adetomi",
      image: "/images/mentors/4.png",
      review:
        "Lorem ipsum dolor sit amet consectetur. Proin diam mattis risus sodales viverra in amet ipsum. Ultrices vel pharetra adipiscing sed at massa aliquet et. Ac mauris mauris consectetur maecenas risus sed sit. Diam id dictumst condimentum tristique mi sit ut est.",
    },
    {
      name: "Faithful Owo",
      image: "/images/mentors/5.png",
      review:
        "Lorem ipsum dolor sit amet consectetur. Proin diam mattis risus sodales viverra in amet ipsum. Ultrices vel pharetra adipiscing sed at massa aliquet et. Ac mauris mauris consectetur maecenas risus sed sit. Diam id dictumst condimentum tristique mi sit ut est.",
    },
  ];

  return (
    <>
      <div className="container">
        <Greeting name="Oguntade" />
        <div className="mb-4">
          <DashboardTime />
        </div>
      </div>
      <ProfileHeader {...mentor} />
      <div className="container py-6">
        <Aboutcard {...profileInfo} />
        <ScrollArea className="pt-14 h-[300px]">
          <div className="flex flex-col gap-16">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </ScrollArea>
        <div className="mt-10">
          <Link href="/sign-up">
            <Button size="lg" className="w-full md:w-fit">
              Book a session
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
