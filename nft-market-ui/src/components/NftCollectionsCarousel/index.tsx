import { LeftArrow, RightArrow } from "../../assets/index";

interface NftItem {
  id: string | number;
  title: string;
  image: string;
}

interface NftCollectionsCarouselProps {
  items: NftItem[];
  title: string;
  onPrev: () => void;
  onNext: () => void;
  scrollContainer: React.RefObject<HTMLDivElement | null>;
  variant?: "small" | "large";
}

const NftCollectionsCarousel = ({
  items,
  title,
  onPrev,
  onNext,
  scrollContainer,
  variant = "small",
}: NftCollectionsCarouselProps) => (
  <section className="m-auto max-w-smContainer md:max-w-mdContainer lg:max-w-container pt-[40px] md:pt-[80px]">
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[18px] lg:text-[24px] text-yellow-400 font-black uppercase italic">
          {title}
        </h2>
        <div className={`flex gap-2 ${variant === "large" && "mr-0 lg:mr-7"}`}>
          <button
            onClick={onPrev}
            className="bg-gray-700 px-4 py-3 rounded-lg hover:bg-gray-600"
          >
            <LeftArrow />
          </button>
          <button
            onClick={onNext}
            className="bg-gray-700 px-4 py-3 rounded-lg hover:bg-gray-600"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainer}
        className={`flex gap-4 scrollbar-hide scroll-smooth ${
          variant === "small" && "overflow-x-auto"
        }`}
      >
        {items.map((nft) => (
          <div
            key={nft.id}
            className={`w-[100px] h-[140px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer 
                transition-transform md:w-[180px] md:h-[240px] 
                ${
                  variant === "large" && "sm:w-full sm:h-[171px] md:w-[600px]"
                }`}
          >
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NftCollectionsCarousel;
