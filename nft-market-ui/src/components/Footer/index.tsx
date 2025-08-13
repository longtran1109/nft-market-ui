interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links?: FooterLink[];
  customContent?: React.ReactNode;
}

interface FooterProps {
  columns: FooterColumn[];
}

const Footer = ({ columns }: FooterProps) => (
  <footer className="text-white py-11 border-t border-gray-700">
    <div className="max-w-smContainer md:max-w-mdContainer lg:max-w-container m-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      {columns.map((col, idx) => (
        <div key={idx}>
          <h4 className="font-bold italic text-[18px] mb-4">{col.title}</h4>
          {col.links && (
            <ul className="space-y-2 text-[12px] md:text-[14px] text-gray-300">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {col.customContent && <div className="mt-4">{col.customContent}</div>}
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;
