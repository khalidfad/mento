import AppShell from "@/components/layouts/app-shell";
import ProfileCard from "./(components)/profile-card";
import ProfileSections from "./(components)/profile-sections";

export default function ProfilePage() {
  const profile = {
    name: "Ayodeji Oguntade",
    type: "Mentee",
    image: "/images/mentors/2.png",
    email: "ayodejiifeoluwaoguntade@gmail.com",
    location: "Lagos, Nigeria",
    phone: "07038584411",
  };

  const sections = {
    industry: "Finance",
    profession: "Accountant",
    experience: "7",
    bio: "Lorem ipsum dolor sit amet consectetur. Proin diam mattis risus sodales viverra in amet ipsum. Ultrices vel pharetra adipiscing sed at massa aliquet et. Ac mauris mauris consectetur maecenas risus sed sit. Diam id dictumst condimentum tristique mi sit ut est.",
  };
  return (
    <AppShell>
      <div className="mb-10">
        <ProfileCard {...profile} />
      </div>
      <ProfileSections {...sections} />
    </AppShell>
  );
}
