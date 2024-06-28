import { NavLink } from "react-router-dom";
//navigation item component added in the header
interface NavItemProps {
  title: string;
  iconUrl: string;
  path:string
}
export default function NavItem({ title, iconUrl,path }: NavItemProps) {
  return (
    <div className="flex text-white font-extrabold md:font-bold hover:text-black hover:cursor-pointer items-center flex-wrap gap-4" >
      <img src={iconUrl} className="hidden md:block" />
      <NavLink to={path}>{title}</NavLink>
    </div>
  );
}