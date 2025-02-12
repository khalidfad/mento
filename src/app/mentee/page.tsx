import MenteeDashboard from "./(components)/dashboard";
import AppShell from "@/components/layouts/app-shell";

export default function Page() {
  return (
    <AppShell>
      <MenteeDashboard />
    </AppShell>
  );
}
