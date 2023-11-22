

type LinkProps = {
    to: string,
    label: string,
    activeLink?: string,
    onClick: (link: string) => void;
}
export const NavLink = ({ to, label, activeLink, onClick }:LinkProps) => (
    <li>
      <a
        href={to}
        onClick={() => onClick(to)}
        className={`${
          activeLink === to ? 'text-[#D14B8F] border-[#D14B8F]' : 'text-[#555555] border-[#D5D5D5]'
        } border-b-[3px] pb-8 hover:text-[#D14B8F] hover:border-[#D14B8F]`}
      >
        {label}
      </a>
    </li>
  );