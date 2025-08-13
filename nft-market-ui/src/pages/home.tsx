import { useRef } from "react";
import Header from "../components/Header";
import NftCollectionsCarousel from "../components/NftCollectionsCarousel";
import ShortcutMenu from "../components/ShortcutMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import {
  NFT_COLLECTS,
  HOT_NFT_CARD,
  PROMOTION_CARD,
  NFT_CALENDAR,
} from "../constants/nftData";
import { FOOTER_COLUMN } from "../constants/footerData";

const Home = () => {
  const nftCollectsRef = useRef<HTMLDivElement>(null);

  const nftCalendarRef = useRef<HTMLDivElement>(null);

  const handleNftCollectsPrev = () => {
    nftCollectsRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleNftCollectsNext = () => {
    nftCollectsRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleNftCalendarPrev = () => {
    nftCalendarRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleNftCalendarNext = () => {
    nftCalendarRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-lgContainer m-auto bg-secondary-5">
      <Header />
      <ShortcutMenu />

      <NftCollectionsCarousel
        items={NFT_COLLECTS}
        scrollContainer={nftCollectsRef}
        onPrev={handleNftCollectsPrev}
        onNext={handleNftCollectsNext}
        title="New NFT Collections"
      />

      <section className="flex flex-col lg:flex-row pb-[40px] md:pb-[80px] m-auto max-w-smContainer md:max-w-mdContainer lg:max-w-container">
        <div className="w-full">
          <NftCollectionsCarousel
            title="NFT DROPS CALENDAR"
            items={NFT_CALENDAR}
            scrollContainer={nftCalendarRef}
            onPrev={handleNftCalendarPrev}
            onNext={handleNftCalendarNext}
            variant="large"
          />
        </div>
        <div className="flex justify-between md:justify-start lg:justify-end gap-6">
          <Card item={HOT_NFT_CARD} />
          <Card item={PROMOTION_CARD} />
        </div>
      </section>
      
      <Footer columns={FOOTER_COLUMN} />
    </div>
  );
};

export default Home;
