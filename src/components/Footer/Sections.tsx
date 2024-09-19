import { Link } from "@tanstack/react-router";

interface Section {
  title: string;
  items: { label: string; to?: string; href?: string }[];
}

const sections: Section[] = [
  {
    title: "Sections",
    items: [
      { label: "Personal", to: "/" },
      { label: "Business", to: "/" },
      { label: "Company", to: "/" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "FAQ", to: "/" },
      { label: "Support", to: "/" },
      { label: "Terms & Conditions", to: "/" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Info", href: "mailto:info@ridfinance.com" },
      { label: "Sales", href: "mailto:sales@ridfinance.com" },
      { label: "Support", href: "mailto:support@ridfinance.com" },
    ],
  },
];

const Sections = () => {
  return (
    <div className="grid gap-y-8 gap-x-6 lg:grid-cols-[150px_150px_150px] justify-start">
      {sections.map((section, index) => (
        <div key={index} className="grid gap-y-4 content-start">
          <h3 className="font-semibold text-xl">{section.title}</h3>
          <ul className="grid gap-y-4 list-none">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  className="text-textColor dark:text-[#a5a5ac] hover:text-primary dark:hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sections;
