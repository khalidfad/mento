interface ProfileSectionsProps {
  industry: string;
  profession: string;
  experience: string;
  bio?: string;
}

export default function ProfileSections({
  industry,
  profession,
  experience,
  bio,
}: ProfileSectionsProps) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col">
        <p className="text-base text-dark-600 mb-3">Industry</p>
        <h3 className="text-base text-dark-600/60 font-medium">{industry}</h3>
      </div>
      <div className="flex flex-col">
        <p className="text-base text-dark-600 mb-3">Profession</p>
        <h3 className="text-base text-dark-600/60 font-medium">{profession}</h3>
      </div>
      <div className="flex flex-col">
        <p className="text-base text-dark-600 mb-3">Years of Experience</p>
        <h3 className="text-base text-dark-600/60 font-medium">{experience}</h3>
      </div>
      <div className="flex flex-col pt-11">
        <p className="text-base text-dark-600 mb-3">Bio</p>
        <h3 className="text-base text-dark-600 font-light">{bio}</h3>
      </div>
    </div>
  );
}
