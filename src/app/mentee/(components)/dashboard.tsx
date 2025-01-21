import DashboardTime from "@/components/core/dashboard-time";
import Greeting from "@/components/core/greeting";
import IndustryCategories from "@/components/core/industry-categories";
import MentorGrid from "./mentor-grid";

export default function MenteeDashboard() {
  return (
    <>
      <Greeting name="Oguntade" />
      <div className="mb-4">
        <DashboardTime />
      </div>
      <div className="mb-7">
        <IndustryCategories />
      </div>
      <MentorGrid />
    </>
  );
}
