'use client'
import { NewProfileFormProvider } from "@/contexts/new-profile";
import ProfileForm from "./profile-form";

export default function Page() {
  return (
    <NewProfileFormProvider>
      <ProfileForm />
    </NewProfileFormProvider>
  );
}
