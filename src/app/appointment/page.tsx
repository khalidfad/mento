import DashboardTime from "@/components/core/dashboard-time";
import Greeting from "@/components/core/greeting";
import AppShell from "@/components/layouts/app-shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Appointments from "./(components)/appointments";

export default function AppointmentPage() {
 return (
    <AppShell>
      <Greeting name="Oguntade" />
      <div className="mb-4">
        <DashboardTime />
      </div>
      <Tabs defaultValue="appointment">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="appointment">Appointment</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        <TabsContent value="appointment">
          <Appointments />
        </TabsContent>
        <TabsContent value="timeline">Timeline</TabsContent>
      </Tabs>
    </AppShell>
  );
}
