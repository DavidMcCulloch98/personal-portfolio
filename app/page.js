"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profile from "../public/profile.jpeg";
import { web1, web2, web3, web4, web5, web6, sky, fdm } from '../public';

const DarkModeSwitcher = ({ darkMode = false }) => {
  if (darkMode) {
    return <BsFillMoonStarsFill className="text-3xl cursor-pointer" />
  } else {
    return <BsSunFill className="text-3xl cursor-pointer text-yellow-500" />;
  };
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-10 pb-6 dark:bg-gray-900 md:px-20 lg-px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
              <h1 className="text-xl">David McCulloch</h1>
              <ul className="flex items-center">
                <li className="mr-4">
                  <button 
                    className="flex items-center md:bg-gradient-to-br from-teal-500 to-cyan-500 md:p-2.5 rounded-xl"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <span className="mr-4 hidden md:block text-white">{darkMode ? "Dark" : "Light"} Mode</span>
                    <DarkModeSwitcher darkMode={darkMode} />
                  </button>
                </li>
                <li className="text-4xl mr-4">
                  <a href="https://github.com/DavidMcCulloch98" target="_blank">
                    <FaGithub />
                  </a>
                </li>
                <li className="text-4xl text-blue-500 dark:text-white">
                  <a href="https://www.linkedin.com/in/david-mcculloch-64277b178/" target="_blank">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">David McCulloch</h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Front-end Developer</h3>
              <div className="mx-auto rounded-full w-72 h-72 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={profile} layout="fill" objectFit="cover" />
              </div>
              <p className="text-md py-6 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">Skilled React developer with a passion for solving problems. I enjoy rising to meet new challenges, always endeavouring to write clean, maintainable code.</p>
              <div className="flex items-center justify-center mt-4">
                <Link 
                  href="/react-cv.pdf"
                  target="_blank"
                  className="flex items-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-6 py-3 border-none rounded-md hover:text-gray-900"
                  download={true}
                >
                  Resume <FaExternalLinkAlt className="ml-2 text-md"/>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="text-center p-4">
              <h2 className="text-3xl py-1 dark:text-white">Development Experience</h2>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Text to be added here: <span className="text-teal-500">Sky </span> and <span className="text-teal-500">FDM </span>
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={sky} width={100} height={100} className="mx-auto" />
                <div className="pb-2">
                  <h3 className="text-xl font-medium pt-8">React Developer</h3>
                  <p className="text-gray-400 italic">September 2021 - Current</p>
                </div>
                <p className="py-2">During my time here I</p>
                <h4 className="py-4 text-teal-600">Technologies used</h4>
                <ul className="flex flex-col gap-2 text-gray-800">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>GraphQL</li>
                  <li>Tailwind</li>
                  <li>Figma</li>
                  <li>React Testing Library</li>
                </ul>
              </div>
              <div className="text-center shadow-xl p-10 rounded-xl lg:my-10 sm:py-6 dark:bg-white flex-1">
                <Image src={fdm} width={100} height={100} className="mx-auto" />
                <div className="pb-2">
                  <h3 className="text-xl font-medium pt-8">Software Development Consultant</h3>
                  <p className="text-gray-400 italic">June 2019 - September 2021</p>
                </div>
                <h4 className="py-4 text-teal-600">Job Responsibilites and Achievements</h4>
                <ul className="flex flex-col gap-3">
                  <li className="text-gray-800">Point 1</li>
                  <li className="text-gray-800">Point 2</li>
                  <li className="text-gray-800">Point 3</li>
                  <li className="text-gray-800">Point 4</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Here are a few personal projects, which should show 
                <span className="text-teal-500"> React </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
