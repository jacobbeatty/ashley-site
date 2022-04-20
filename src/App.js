import "./App.css";
// import "./components/Nav";
import { ReactComponent as Logo } from "./images/LOGO.svg";
import { ReactComponent as LogoText } from "./images/Logo Text.svg";
import horse from "./images/horse.jpg";
import ash from "./images/For Jake 2.jpeg";
import { ReactComponent as Dot } from "./images/dot.svg";

import {
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";
import { animate, AnimatePresence, motion } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <div className="flex font-main font-semibold text-[2.5rem]">
      <div className="flex-none w-0 sm:w-40">
        <Nav />
      </div>
      <div className=" h-screen w-screen">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about2" element={<About2 />} />
            <Route path="about3" element={<About3 />} />
            <Route path="meet" element={<MeetTheHerd />}>
              <Route path="" element={<HerdIndex />} />
              <Route path=":slug" element={<HerdMember />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
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
    <motion.div
      className="content flex-col p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Logo className=" justify-center flex" />
      <LogoText className=" absolute right-10 top-10" />
    </motion.div>
  );
}

function About() {
  return (
    <div className="content flex  flex-col p-10">
      <motion.div
        className="h-[90%] w-[100%]"
        key={"about"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img className="about-image" src={horse} alt="Horses in a pasture" />
        <div className="about-section">
          <div className="h-[10%] ">
            <h2 className="about-text text-xl sm:text-4xl">Header</h2>
          </div>
          <div className="h-auto about-text text-center mt-5">
            <h1 className="p-5 font-thin text-xl sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus velit enim, libero accusantium labore vel. Facilis,
              commodi reprehenderit? Et natus modi ipsam itaque, ad debitis non
              voluptate rerum tempora culpa quae laborum repellat, est
              necessitatibus, soluta quos inventore ex cupiditate blanditiis
              enim sint fugiat! Quae in natus voluptatibus porro. Iste maxime
              asperiores, distinctio odit quia adipisci quis eaque veritatis!
              Ipsam eius debitis in natus quos, sequi commodi ipsa nesciunt
              dolores. Provident, quod eius ullam perspiciatis praesentium nam
              assumenda tempore recusandae quae! Consectetur nihil magni ipsam
              minima cum quidem laborum atque fugiat temporibus repellendus eum
              debitis, ullam earum distinctio, praesentium voluptatum!
            </h1>
          </div>
          <div></div>
        </div>
      </motion.div>
      <div className="dots">
        <Link to="/about">
          <Dot className="dot  fill-blue" />
        </Link>
        <Link to="/about2">
          <Dot className="dot  fill-white" />
        </Link>
        <Link to="/about3">
          <Dot className="dot fill-white" />
        </Link>
      </div>
    </div>
  );
}

function About2() {
  return (
    <div className="content flex  flex-col p-10">
      <motion.div
        className="h-[90%] w-[100%]"
        key={"about"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img className="about-image" src={horse} alt="Horses in a pasture" />
        <div className="about-section">
          <div className="h-[10%] ">
            <h2 className="about-text text-xl sm:text-4xl">Header</h2>
          </div>
          <div className="h-auto about-text text-center mt-5">
            <h1 className="p-5 font-thin text-xl sm:text-4xl">about 2</h1>
          </div>
          <div></div>
        </div>
      </motion.div>
      <div className="dots">
        <Link to="/about">
          <Dot className="dot  fill-white" />
        </Link>
        <Link to="/about2">
          <Dot className="dot fill-blue" />
        </Link>
        <Link to="/about3">
          <Dot className="dot fill-white" />
        </Link>
      </div>
    </div>
  );
}

function About3() {
  return (
    <div className="content flex  flex-col p-10">
      <motion.div
        className="h-[90%] w-[100%]"
        key={"about"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img className="about-image" src={horse} alt="Horses in a pasture" />
        <div className="about-section">
          <div className="h-[10%] ">
            <h2 className="about-text text-xl sm:text-4xl">Header</h2>
          </div>
          <div className="h-auto about-text text-center mt-5">
            <h1 className="p-5 font-thin text-xl sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus velit enim, libero accusantium labore vel. Facilis,
              commodi reprehenderit? Et natus modi ipsam itaque, ad debitis non
              voluptate rerum tempora culpa quae laborum repellat, est
              necessitatibus, soluta quos inventore ex cupiditate blanditiis
              enim sint fugiat! Quae in natus voluptatibus porro. Iste maxime
              asperiores, distinctio odit quia adipisci quis eaque veritatis!
              Ipsam eius debitis in natus quos, sequi commodi ipsa nesciunt
              dolores. Provident, quod eius ullam perspiciatis praesentium nam
              assumenda tempore recusandae quae! Consectetur nihil magni ipsam
              minima cum quidem laborum atque fugiat temporibus repellendus eum
              debitis, ullam earum distinctio, praesentium voluptatum!
            </h1>
          </div>
          <div></div>
        </div>
      </motion.div>
      <div className="dots ">
        <Link to="/about">
          <Dot className="dot  fill-white dot" />
        </Link>
        <Link to="/about2">
          <Dot className="dot fill-white dot" />
        </Link>
        <Link to="/about3">
          <Dot className="dot fill-blue dot" />
        </Link>
      </div>
    </div>
  );
}

function MeetTheHerd() {
  return (
    <div className="hundo">
      <Outlet />
    </div>
  );
}

function HerdIndex() {
  return (
    <div className="flex flex-row justify-center hundo p-[2%]">
      {Object.entries(herd).map(([slug, { name, img }]) => (
        <div className="pr-10 self-center" key={slug}>
          <Link to={`/meet/${slug}`}>
            <h2 className="bg-blue w-[fit-content]">{name}</h2>
            <img
              className="h-[80%] w-[50vw]  object-cover object-center"
              src={img}
              alt=""
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

function HerdMember() {
  const { slug } = useParams();
  const herdMember = herd[slug];
  if (!herdMember) {
    return <h2>Not Found!</h2>;
  }

  const { name, bio, img } = herdMember;
  return (
    // <div className="">
    //   <h1>{name}</h1>
    //   <img className=" w-[50vw]  object-cover object-center" src={img}></img>
    //   <h2>{bio}</h2>
    // </div>
    <div className="flex flex-row h-[100%] w-[100%] p-[2%]">
      <div className=" h-[100%] w-[50%]">
        <img className="bio-image" src={img} />
      </div>
      <div className="h-[100%] w-[50%] mt-[1%]">
        <h2 className="bg-blue ml-[-30px] h-[fit-content] w-[fit-content]">
          {name}
        </h2>

        <h1 className="bg-bgPink mt-[1%] ml-[-30px]">{bio}</h1>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content flex-row p-5">
      <div className="flex-col h-[100%] w-[50%]">
        <div className="h-[40%] w-[100%]"></div>
        <div className="h-[60%] w-[100%]"> Upcoming</div>
      </div>
      <div className="h-[100%] w-[50%]">
        <div className="h-[100%] w-[100%]"> FAQ</div>
      </div>
    </div>
  );
}

const herd = {
  "ash": {
    name: "Ashley",
    img: ash,
    bio: "Temporibus velit enim, libero accusantium labore vel. Facilis,commodi reprehenderit? Et natus modi ipsam itaque, ad debitis nonvoluptate rerum tempora culpa quae laborum repellat, estnecessitatibus, soluta quo",
  },
  "horse": {
    name: "Horse",
    img: horse,
    bio: "Temporibus velit enim, libero accusantium labore vel. Facilis,commodi reprehenderit? Et natus modi ipsam itaque, ad debitis nonvoluptate rerum tempora culpa quae laborum repellat, estnecessitatibus, soluta quo",
  },
  "horse2": {
    name: "Horse 2",
    img: ash,
    bio: "Temporibus velit enim, libero accusantium labore vel. Facilis,commodi reprehenderit? Et natus modi ipsam itaque, ad debitis nonvoluptate rerum tempora culpa quae laborum repellat, estnecessitatibus, soluta quo",
  },
};

const about = {
  "about1": {
    img: horse,
    header: "Header for about1",
    body: "Text here",
  },
  "about2": {
    img: horse,
    header: "Header for about2",
    body: "Text here",
  },
  "about3": {
    img: horse,
    header: "Header for about3",
    body: "Text here",
  },
};
