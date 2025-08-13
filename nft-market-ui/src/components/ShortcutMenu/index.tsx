import { SHORTCUT_ITEMS } from "../../constants/shortcutItems";

const ShortcutMenu = () => (
  <section className="w-full bg-[#1F2023]">
    <div
      className={
        "w-full bg-cover bg-center h-[180px] md:h-[300px] lg:h-[450px]"
      }
      style={{
        backgroundImage: 'url("/nftBackground.png")',
        backgroundPosition: "10% center",
      }}
    />
    <div className="m-auto max-w-smContainer md:max-w-mdContainer lg:max-w-container">
      <div className="flex justify-between items-center gap-0 md:gap-5 lg:gap-32 gap-4 py-5">
        {SHORTCUT_ITEMS.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            {item.icon}
            <p className="text-white uppercase mt-2 text-[10px] md:text-[14px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ShortcutMenu;
