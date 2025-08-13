interface CardItem {
  title: string;
  image: string;
}

interface CardProps {
  item: CardItem;
}

const Card = ({ item }: CardProps) => {
  const { title, image } = item;

  return (
    <div className="flex flex-col gap-4 pt-[40px] lg:pt-[80px] bg-secondary-5">
      <h2 className="text-yellow-400 uppercase font-black italic text-[18px] lg:text-[24px]">
        {title}
      </h2>
      <div className="w-[167px] h-[167px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer md:w-[240px] md:h-[240px]">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Card;
