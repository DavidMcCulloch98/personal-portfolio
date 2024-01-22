import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profile from "../public/profile.jpeg";

export const metadata = {
  title: 'David McCulloch Portfolio',
  description: 'Portfolio website',
}

export default function Home() {
  return (
    <>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center">
            <h1 className="text-xl">David McCulloch</h1>
            <ul className="flex items-center">
              <li className="mr-4">
                <BsFillMoonStarsFill className="text-3xl cursor-pointer"/>
              </li>
              <li className="text-4xl mr-4">
                <a href="https://github.com/DavidMcCulloch98" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li className="text-4xl">
                <a href="https://www.linkedin.com/in/david-mcculloch-64277b178/" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">David McCulloch</h2>
            <h3 className="text-2xl py-2">Front-end Developer</h3>
            <div className="relative mt-20 mb-20 mx-auto rounded-full w-80 h-80 overflow-hidden">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
            <p className="text-md py-5 leading-8 text-gray-700">Skilled React developer with a passion for solving problems. I enjoy rising to meet new challenges, always endeavouring to write clean, maintainable code.</p>
          </div>
        </section>
        <section>
          <div className="text-center p-8">
            <h2 className="text-3xl">Development Experience</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              Text to be added here.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
