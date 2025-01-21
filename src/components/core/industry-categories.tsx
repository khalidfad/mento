import IndustryItem from "@/components/core/industry-item";

export default function IndustryCategories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      image: "/images/industries/1.png",
    },
    {
      id: 2,
      name: "Finance",
      image: "/images/industries/2.png",
    },
    {
      id: 3,
      name: "Health",
      image: "/images/industries/3.png",
    },
    {
      id: 4,
      name: "Retail",
      image: "/images/industries/1.png",
    },
    {
      id: 5,
      name: "Education",
      image: "/images/industries/2.png",
    },
    {
      id: 6,
      name: "Manufacturing",
      image: "/images/industries/3.png",
    },
  ];
  return (
    <>
      <h2 className="text-xl font-medium text-dark-600 mb-6">
        Industry categories
      </h2>

      <div className="flex overflow-x-auto gap-9 pb-4">
        {categories.map((category) => (
          <IndustryItem key={category.id} {...category} />
        ))}
      </div>
    </>
  );
}
