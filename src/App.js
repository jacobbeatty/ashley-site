import "./App.css";
// import "./components/Nav";
import { ReactComponent as Logo } from "./images/LOGO.svg";

import pic_whatis from "./images/AboutPics/WhatIs.png";

import useContentful from "./useContentful";

import { useEffect, useState } from "react";
import MemberCard from "./components/MemberCard";
import AboutCard from "./components/AboutCard";

import * as Yup from "yup";

import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useFormik } from "formik";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex font-main font-semibold ">
      <div className=" flex-none w-0 sm:w-40">
        <Nav />
        <MobileNav />
      </div>
      <div className=" h-screen w-screen">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutContentful />} />
            <Route path="meet" element={<MeetTheHerdContentful />} />

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
    <div className="bg-secondary text-primary text-2xl fixed z-50 top-0 left-0 h-screen w-0 sm:w-40 m-0 flex flex-col justify-center items-center invisible sm:visible">
      <ul className=" transform rotate-90 font-main font-semibold text-4xl flex flex-row items-center whitespace-nowrap w-0 sm:w-[100vh] place-content-evenly">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/meet"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          Meet The Herd
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          Contact
        </NavLink>
      </ul>
      <div className=" border-l-4 border-secondary h-full absolute right-[-.5rem]"></div>
      {/* <NavBarIcon text="Follow my instagram" icon={<FaInstagram size={28} />} /> */}
    </div>
  );
}

function MobileNav() {
  return (
    <div className="mobile bg-secondary text-primary text-2xl fixed z-50 top-0 left-0 h-20 w-[100%]  m-0 flex justify-center items-center visible sm:invisible">
      <ul className="w-[100%] transform  font-main font-semibold text-base flex flex-row items-center whitespace-nowrap w-0 sm:w-[100vh] justify-between place-content-evenly p-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/meet"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          Meet The Herd
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " text-blue border-b-4 border-current" : ""
          }
        >
          Contact
        </NavLink>
      </ul>
      {/* <div className=" border-l-4 border-secondary w-full absolute right-[-.5rem]"></div> */}
      {/* <NavBarIcon text="Follow my instagram" icon={<FaInstagram size={28} />} /> */}
    </div>
  );
}

function Home() {
  return (
    <motion.div
      className="pt-20 sm:pt-0 content flex-col p-10 img-bg bg-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Logo className=" justify-center flex w-[40%]" />
      {/* <LogoText className=" absolute right-10 top-10" /> */}
    </motion.div>
  );
}

function AboutContentful() {
  const whatHeader = "What is Equine Facilitated Learning?";

  const [aboutTypes, setAboutTypes] = useState([]);
  const { getAboutTypes } = useContentful();

  useEffect(() => {
    getAboutTypes().then((response) => response && setAboutTypes(response));
  }, []);

  return (
    <motion.div
      className="pt-20 sm:pt-0 h-[100%] w-[100%]"
      key={"about_Contentful"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed h-[100%] w-[100%] svg-bg"></div>
      <div className="content flex  flex-col p-2 lg:p-10 ">
        <div className="flex flex-col md:flex-row md:pb-8">
          <div className="w-[100%] lg:w-[68%] bgClear p-5">
            <h1 className="text-xl md:text-4xl ">
              <strong>
                <em>{whatHeader}</em>
              </strong>
            </h1>
            <p className="body-text-sizing whitespace-pre-line">
              Horses and humans have been in conversation for thousands of
              years.
              <br></br>
              <br></br>
              <strong>Equine Facilitated Learning</strong> is a space to
              participate in this powerful conversation. Horses are sentient
              beings that mirror back to us our thoughts and feelings, and to
              share space with such a powerful animal can shift us in profound
              ways.
              <br></br>
              <br></br>
              Horses can help us gain clarity on what we are experiencing and
              feeling in a <strong>non-judgemental</strong> way, and being
              around{" "}
              <strong>
                horses can help us to trust and be honest with ourselves.
              </strong>
              <br></br>
              <br></br>
              When we take responsibility for ourselves, we open doors to living
              life in a way that honors our powerful potential.
              <br></br>
              <br></br>
              <strong>Equus & Awareness</strong> facilitates a safe and
              supportive environment to learn about ourselves and others."
            </p>
          </div>
          <img
            className="hidden lg:block w-[32%] object-cover object-top "
            src={pic_whatis}
            alt="horse and lady"
          />
        </div>
        <div className=" flex flex-row flex-wrap  justify-between">
          {aboutTypes.map((aboutType, index) => (
            <AboutCard key={index} aboutType={aboutType} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MeetTheHerdContentful() {
  const [herdMembers, setHerdMembers] = useState([]);
  const { getHerdMembers } = useContentful();

  useEffect(() => {
    getHerdMembers().then((response) => response && setHerdMembers(response));
  }, []);

  return (
    <motion.div
      className="pt-20 sm:pt-0 h-[100%] w-[100%]"
      key={"herd_contentful"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed h-[100%] w-[100%] svg-bg"></div>

      <div className="content flex  flex-col p-2 lg:pl-6 xl:justify-center">
        <div className=" flex flex-row flex-wrap xl:flex-nowrap  justify-between ">
          {herdMembers.map((herdMember, index) => (
            <MemberCard key={index} herdMember={herdMember} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30, "Must be 30 characters or less").required(),
      email: Yup.string().email().required(),
      message: Yup.string().min(4, "Please include your message :)").required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <motion.div
      className=" h-[100%] w-[100%]"
      key={"contact"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed h-[100%] w-[100%] svg-bg"></div>

      <div className="content flex flex-col sm:flex-row pt-28 sm:pt-0  p-2 lg:p-10  justify-between">
        {/* Left pane */}
        <div className="flex-col h-fit sm:h-[100%] w-[100%] sm:w-[49%] flex justify-between body-text-sizing">
          <div className="mb-10 flex flex-col h-fit sm:h-[38%] w-[100%] items-center bgClear ">
            <h1 className=" text-4xl font-bold italic bg-blue text-center  w-fit mt-[-2vh] pl-2 pr-2">
              Contact
            </h1>
            <form
              className="flex flex-col w-full p-5 items-center"
              onSubmit={formik.handleSubmit}
              action=""
            >
              <input
                className={`${
                  formik.errors.name ? "border-red-500" : ""
                } form-input`}
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? <></> : null}
              <input
                className="form-input"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.email ? <></> : null}

              <textarea
                className="form-input h-[15vh] resize-none"
                id="message"
                name="message"
                type="message"
                placeholder="Enter message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? <></> : null}

              <button className="bg-blue p-2 w-fit ml-auto" type="submit">
                Send →
              </button>
            </form>
          </div>
          <div className="mb-10 flex flex-col h-fit sm:h-[58%] w-[100%] items-center bgClear">
            <h1 className=" text-4xl font-bold italic bg-blue text-center  w-fit mt-[-2vh] pl-2 pr-2">
              Workshops
            </h1>
            {events.map((event) => (
              <>
                <li className="list-none">{event.name}</li>
                <li className="list-none">{event.description}</li>
              </>
            ))}
          </div>
        </div>
        {/* Right pane */}
        <div className="mb-10 h-fit sm:h-[100%] w-[100%] sm:w-[49%] body-text-sizing">
          <div className="h-auto min-h-[100%] w-[100%] bgClear p-6 list-none flex flex-col align-middle items-center">
            <h1 className=" text-4xl font-bold italic bg-blue text-center w-fit mt-[-3vh] pl-2 pr-2">
              FAQ
            </h1>

            <div>
              {faqs.map((faq) => (
                <>
                  <li className=" font-bold">{faq.question}</li>
                  <li>{faq.answer}</li>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// const herd = {
//   "star": {
//     name: "Star",
//     img: star,
//     bio: "Star is a 16hh bay Thoroughbred mare. Star has come from a racing background, but much prefers chasing chickens away from her food than the finishing line. To follow Star’s adventures, see the Equus & Awareness Instagram link.",
//   },
//   "bell": {
//     name: "Bell",
//     img: bell,
//     bio: "Bell is a 15.1hh dappled grey Stockhorse. Bell has seen it all in her long lifetime of over 35 years. She is a wise old soul now enjoying a quieter life, sharing her gulf of wisdom in Equine Facilitated Awareness sessions and workshops. She is a natural teacher, for humans and horses alike.",
//   },
//   "fern": {
//     name: "Fern",
//     img: fern,
//     bio: "Fern is an Australian Cattle Dog. She is full of fun and very cheeky. Fern has a naturalherding instinct and is still learning that horses are not cattle, and don’t need rounding up. She enjoys their presence from a distance and will occasionally come to private sessions. She is very friendly, and loves to be around human companions.",
//   },
//   "ash": {
//     name: "Ashley",
//     img: ash,
//     bio: "Ashley is a qualified Equine Facilitated Learning Practitioner. Ashley co-facilitates with horses, aiming to foster self-awareness and inspire people of all ages and backgrounds to connect with their strengths and potential that has always been there. To follow Ashley’s horsemanship journey, follow the Instagram link.",
//   },
// };

// const aboutType = {
//   "about1": {
//     img: pic_individual,
//     header: "Individual Sessions",
//     body: "We offer private sessions, tailored to your individual needs. We work with clients to create bespoke programs available from child to adult. These sessions involve structured activities designed to facilitate personal goals and enhance well-being, connection and self-awareness.",
//   },
//   "about2": {
//     img: pic_group,
//     header: "Group Sessions",
//     body: "Working in groups can help to build trust, facilitate supportive connections, develop communication and inspire collaboration. In collaboration with a group coordinator, we design a tailor-made program to suit specific group needs. Group sessions are available as one day packages, or over a weekly basis for a pre-determined time frame. Please get in touch to discuss.",
//   },
//   "about3": {
//     img: pic_workshops,
//     header: "Public Workshops",
//     body: "Workshops give the advantage of a shared lens to facilitate personal growth and self- development central to a specific theme. Workshops run over a one or two-day period, with lunch provided at an extra cost. Workshops are based out of our facilities on the idyllic Fleurieu Peninsula of South Australia. If you are interested in hosting a workshop at your own facilities in South Australia or interstate, please get in touch via our Contact page.",
//   },
//   "about4": {
//     img: pic_retreat,
//     header: "Retreats",
//     body: "Working with and learning from horses can bring a dynamic and uplifting element to your retreat package. We have beautiful facilities near the popular coastal destination of Port Elliot in South Australia. Please get in touch for more information on our bespoke retreat workshops.",
//   },
//   "about5": {
//     img: pic_collab,
//     header: "Collaboration",
//     body: "Is there something you want to share with the world? Do you need a powerful platform?  We are open to collaborating with various modalities whose values and ethics align with the invitational approach of Equus & Awareness.  Book a free 30 minute discovery call to kickstart your idea via the Contact page.",
//   },
//   "about6": {
//     img: pic_riders,
//     header: "For Riders & Horse Owners",
//     body: "If you have your own horse, we offer private sessions at your own home or agistment. These sessions are a great opportunity to strengthen the connection with your horse, and meet each other with a fresh perspective.  These sessions are designed as personal development sessions, but as a result can help to understand horsemanship difficulties.",
//   },
// };

const faqs = [
  {
    "question": "What do I wear?",
    "answer":
      "Please wear comfy clothes and closed toed shoes to your Equine Facilitated Learning session or workshop.",
  },
  {
    "question":
      "But I don’t have any horse experience.. I’m scared of horses..",
    "answer":
      "No worries! A lot of people with no previous horse experience come to our sessions. In fact, it is a great way to have your very first horse experience in a calm, safe and supportive environment.",
  },
  {
    "question": "Is it safe?",
    "answer":
      "It can seem intimidating working with such large and powerful animals for the first time but our sessions are kept safe by trained individuals who hold safety as their number one priority. We adopt an invitational approach, and no one is ever forced to do anything they don’t want to or don’t feel safe doing.",
  },
  {
    "question": "What if it’s raining?",
    "answer":
      "Sometimes the weather has other ideas! There is no reason we can’t work with a rainy environment, especially as we have enclosed facilities. However, if the weather is just too hot (or wild) to handle, a full reimbursement or change of session will be offered. Please dress weather appropriate.",
  },
  {
    "question": "Payment",
    "answer":
      "Please pay in advance for your session or workshop via bank transfer.",
  },
];

const events = [
  {
    "name": "Event Name",
    "description": "Descrip 1",
  },
  {
    "name": "Event Name 2",
    "description": "Descrip 2",
  },
  {
    "name": "Event Name 3",
    "description": "Descrip 3",
  },
  {
    "name": "Event Name 4",
    "description": "Descrip 4",
  },
];
