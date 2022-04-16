import "./App.css";
// import "./components/Nav";
import { ReactComponent as Logo } from "./images/LOGO.svg";
import { ReactComponent as LogoText } from "./images/Logo Text.svg";
import horse from "./images/horse.jpg";
import dots from "./images/dots.png";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex font-main font-semibold text-[2.5rem]">
      <div className="flex-none w-0 sm:w-40">
        <Nav />
      </div>
      <div className="flex-auto w-96">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="meet" element={<MeetTheHerd />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
function Nav() {
  return (
    <div className="bg-secondary text-primary text-2xl fixed top-0 left-0 h-screen w-0 sm:w-40 m-0 flex flex-col justify-center items-center invisible sm:visible">
      <ul className=" transform rotate-90 font-main font-semibold text-4xl flex flex-row items-center whitespace-nowrap w-0 sm:w-[100vh] place-content-evenly">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/meet">Meet The Herd</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <div className=" border-l-4 border-secondary h-full absolute right-[-.5rem]"></div>
      {/* <NavBarIcon text="Follow my instagram" icon={<FaInstagram size={28} />} /> */}
    </div>
  );
}

// const NavBarIcon = ({ icon, text = "tooltip" }) => (
//   <div className="navbar-icon group">
//     {icon}
//     <span className="navbar-tooltip group-hover:scale-100">{text}</span>
//   </div>
// );

function Home() {
  return (
    <div className="content">
      <Logo className=" justify-center flex" />
      <LogoText className=" absolute right-10 top-10" />
    </div>
  );
}

function About() {
  return (
    <div className="content flex-col p-10">
      <img
        className="h-[70%] w-full object-cover object-center"
        src={horse}
        alt="Horses in a pasture"
      />
      <div className="flex flex-col content-center items-center h-[30%] w-full pt-4">
        <div className="h-[10%] ">
          <h2 className="about-text text-xl sm:text-4xl">Header</h2>
        </div>
        <div className="h-auto about-text text-center mt-5">
          <h1 className="p-5 font-thin text-xl sm:text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            velit enim, libero accusantium labore vel. Facilis, commodi
            reprehenderit? Et natus modi ipsam itaque, ad debitis non voluptate
            rerum tempora culpa quae laborum repellat, est necessitatibus,
            soluta quos inventore ex cupiditate blanditiis enim sint fugiat!
            Quae in natus voluptatibus porro. Iste maxime asperiores, distinctio
            odit quia adipisci quis eaque veritatis! Ipsam eius debitis in natus
            quos, sequi commodi ipsa nesciunt dolores. Provident, quod eius
            ullam perspiciatis praesentium nam assumenda tempore recusandae
            quae! Consectetur nihil magni ipsam minima cum quidem laborum atque
            fugiat temporibus repellendus eum debitis, ullam earum distinctio,
            praesentium voluptatum!
          </h1>
        </div>
        <div>
          <img className="p-5" src={dots} alt="" />
        </div>
      </div>
    </div>
  );
}

function MeetTheHerd() {
  return (
    <div className="content">
      <h1>MeetTheHerd</h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="content">
      <h1>Contact</h1>
    </div>
  );
}
