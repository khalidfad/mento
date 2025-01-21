import Image from "next/image";

interface IndustryItemProps {
  name: string;
  image: string;
}

export default function IndustryItem(props: IndustryItemProps) {
  const { name, image } = props;
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer shrink-0 group">
      <Image src={image} alt={name} width={90} height={90} className="mb-3" />
      <h3 className="text-base text-center font-medium text-dark-500 group-hover:text-dark-600 border-b border-transparent group-hover:border-dark-600 pb-4">
        {name}
      </h3>
    </div>
  );
}
