import { FaInstagram } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="bg-secondary text-primary text-2xl fixed top-0 left-0 h-screen w-40 m-0 flex flex-col justify-center items-center">
      <ul className=" transform rotate-90 font-main font-semibold text-4xl flex flex-row items-center whitespace-nowrap w-[100vh] place-content-evenly">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/meet">Meet The Herd</a>
        <a href="/contact">Contact</a>
      </ul>
      <div className=" border-l-4 border-secondary h-full absolute right-[-.5rem]"></div>
      {/* <NavBarIcon text="Follow my instagram" icon={<FaInstagram size={28} />} /> */}
    </div>
  );
}

const NavBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="navbar-icon group">
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
