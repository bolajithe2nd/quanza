const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <a
        href={href}
        className="border-t md:border-0 grid py-4 text-sm text-textColor dark:text-[#d2d2d6] font-medium md:text-base transition-colors ease-in-out hover:text-primary"
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
