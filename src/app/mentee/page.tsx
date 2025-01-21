import Image from "next/image";
import MenteeDashboard from "./(components)/dashboard";

export default function Page() {
  return (
    <div>
      <Image
        src="/images/logo-dark.svg"
        alt="Mento logo"
        width={110}
        height={25}
        className="mb-7"
      />
      <MenteeDashboard />
    </div>
  );
}
