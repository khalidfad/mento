export default function DashboardTime() {
  const date = new Date();
  return (
    <div className="text-base text-dark-500 font-light">
      {date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </div>
  );
}
