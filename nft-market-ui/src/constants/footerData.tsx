export const FOOTER_COLUMN = [
  {
    title: "ABOUT US",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Company Details", href: "/company" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Help center", href: "/help" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Affiliate", href: "/affiliate" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "NFT Marketplace", href: "#" },
      { label: "Slingshot", href: "#" },
      { label: "Swaps", href: "#" },
      { label: "NFT Launchpad", href: "#" },
      { label: "Runes Platform", href: "#" },
      { label: "Creator Dashboard", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Support", href: "#" },
      { label: "API", href: "#" },
      { label: "Feature Requests", href: "#" },
      { label: "Trust & Safety", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
  {
    title: "CONTACT US",
    links: [
      {
        label: "support@tech.email",
        href: "mailto:support@tech.email",
      },
      {
        label: "affiliate@tech.com",
        href: "mailto:affiliate@tech.com",
      },
    ],
    customContent: (
      <a href="#" className="rounded-lg text-white">
        <img
          src="./installApp.png"
          alt="Install App"
          className="w-[151px] h-[44px]"
        />
      </a>
    ),
  },
];
