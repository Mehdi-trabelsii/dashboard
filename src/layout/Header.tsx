import NavItem from "../components/NavItem";
//simple Header component 
const navLinks = [
  { title: "Users", iconURL: "/user.svg", link: "/users" },
  { title: "Stats", iconURL: "/area-chart.svg", link: "/" },
  { title: "Reports", iconURL: "/clipboard-plus.svg", link: "/" },
];
export default function Header() {
  return (
    <div className="bg-green  flex justify-between md:justify-center md:gap-80 align-center  min-h-14  items-center overflow-hidden">
      <h1 className="text-2xl font-extrabold text-white">User Dashboard</h1>
      <div className="display flex gap-6 pr-4">
        {navLinks.map((link) => {
          return (
            <NavItem
              path={link.link}
              key={link.title}
              title={link.title}
              iconUrl={link.iconURL}
            />
          );
        })}
      </div>
    </div>
  );
}
