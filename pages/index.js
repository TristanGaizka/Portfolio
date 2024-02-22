import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import Image from "next/image";
import figma1 from "../public/figma1.png";
import figma2 from "../public/figma2.png";
import no_esc from "../public/no-escape.png";
import opengl from "../public/opengl.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tristan Gaizka Mulyadi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Student at Christian University of Satya Wacana.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              4th year student with high motivation to be better. <br></br>
              Interested in web development, databases, and front-end development.<br></br>
            </p>
            <div className="text-l flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">
            <a
                  className="text-3xl bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.youtube.com/@ignavuscael9758"
                >
                  <AiFillYoutube/>
                </a>
                <a
                  className="text-3xl bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://twitter.com/TristanGaizka"
                >
                  <AiFillTwitterCircle/>
                </a>
              <a
                  className="text-3xl bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.instagram.com/tristangaizka/"
                >
                  <AiFillInstagram/>
                </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Tools Used</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a student, there are some tools that i used to make some of the project that i made
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including
              programming and designing.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Designing
              </h3>
              
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Procreate</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Coding
              </h3>
              <h4 className="py-4 text-teal-600">Coding language I Use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C/C++</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://www.figma.com/proto/eNtwiXlZtNnCgdUCFdIzRh/Cheekmate?node-id=0-8&starting-point-node-id=0%3A8&mode=design&t=acU7LVwwBuffVevG-1"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={figma1}
              /></a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.figma.com/proto/yYxTsbvgttuiSBviizOvXY/TR-IMK-ASDOS-konsultasi-psikolog?node-id=32-604&starting-point-node-id=21%3A4&mode=design&t=cqJKhZpdEc194XC3-1"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={figma2}
              /></a>
            </div>
            <div className="basis-1/3 flex-1 center">
              <a href="https://drive.google.com/file/d/1uL2jzfb1pVe9JI-WFE8RVRtig_obHS7u/view?usp=drive_link"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={no_esc}
              /></a>
            </div>
            <div className="basis-1/3 flex-1 center">
              <a href="#"><Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={opengl} 
              /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
