'use client'
import { Calendar, File, Info, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Home() {


  return (
    <div className="min-h-screen   py-[4svh] flex-col flex  justify-center items-center   w-full p-10 ">

      <div className=" max-w-2xl flex flex-col items-start text-left w-full gap-4 ">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl md:text-4xl font-bold ">Hey,I'm Taha Sabiri </h1>
          <div className="px-4 h-fit py-1 rounded-full border border-purple-700 bg-purple-700/10 text-purple-700 hidden md:flex justify-center items-center">
            <span className="text-sm ">in work</span>
          </div>
        </div>
        <p>
          Front-End Developer with 4 years of hands-on experience in building responsive, user-friendly, and scalable web applications. Skilled in modern JavaScript frameworks, UI/UX best practices, and performance optimization. Strong problem-solving abilities with a focus on delivering clean, maintainable code and enhancing user experience.
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          <div className="py-1 px-4 rounded-full border border-black/10">
            <a href="https://linkedin.com/in/tahasabiri">
              <span>Linkedin</span>
            </a>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <a href="https://github.com/Taha-sabiri">
              <span>GitHub</span>
            </a>
          </div>

          <div className="py-1 px-4 rounded-full border border-black/10">
            <a href="mailto:taha.sabiri6702@gmail.com">
              <span>Email</span>
            </a>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <a href="sms:+989102876702">
              <span>Message</span>
            </a>
          </div>

        </div>

        {/* ------------------ */}
        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Skills</span>
        </div>

        <div className="flex gap-2 mt-1 flex-wrap">
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Next.js</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>React.js</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Vue.js</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>TypeScript</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>JavaScript</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Figma-Photoshop-Illustrator</span>
          </div>


        </div>


        {/* ------------------ */}
        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Familiar with</span>
        </div>
        <div className="flex gap-2 mt-1 flex-wrap">

          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Flutter</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Kotlin</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Sql</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Java</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Dart</span>
          </div>
          <div className="py-1 px-4 rounded-full border border-black/10">
            <span>Node.js</span>
          </div>
        </div>



        {/* ------------------ */}

        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Experience</span>
        </div>
        <div className="flex gap-2 mt-1 flex-wrap">

          <div className="bg-black/5 p-2 rounded-md" >
            <h1>EVTSP CO (Member of bank Mellat) - Front-End Developer</h1>
            <div className="flex gap-2  tems-center  py-2 ">
              <Calendar className=" text-black/70 size-3" />
              <span className="text-sm text-black/70 w-full">
                Oct2023 - Present
              </span>
            </div>
            <p className="text-sm text-black/70">
              Collaborated in a front-end development team to build and optimize web applications for TSP (Tax Service Provider) platform. Contributed to achieving the official TSP license from the Iranian National Tax Administration through team effort and technical implementation.
            </p>

          </div>

          <div className="bg-black/5 p-2 rounded-md" >
            <h1>OnlineAdvertiser - Front-End Developer & UiUx Designer</h1>
            <div className="flex gap-2  tems-center  py-2 ">
              <Calendar className=" text-black/70 size-3" />
              <span className="text-sm text-black/70 w-full">
                Part time - Apr2019 - Jul2021
              </span>
            </div>
            <p className="text-sm text-black/70">
              Developed the company’s portfolio website and designed user interfaces for “Melango,” a podcast application. Focused on delivering responsive, user-friendly designs and implementing modern front-end practices for advertising projects.
            </p>

          </div>

        </div>

        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <File className="size-5" />
          <span>Project</span>
        </div>
        <div className="flex gap-2 mt-1 flex-wrap">

          <div className="bg-black/5 p-2 rounded-md w-full" >
            <h1>Allocating Taxes to Incomplete Construction Projects </h1>
            <div className="flex gap-2  tems-center  py-2 ">
              <Calendar className=" text-black/70 size-3" />
              <span className="text-sm text-black/70 w-full">
                Aug2025
              </span>
            </div>
            <a className="text-sm text-black/70" href="https://mtp.evtsp.com">
              https://mtp.evtsp.com
            </a>

          </div>
          <div className="bg-black/5 p-2 rounded-md w-full" >
            <h1>tax service provider (bank mellat TSP)</h1>
            <div className="flex gap-2  tems-center  py-2 ">
              <Calendar className=" text-black/70 size-3" />
              <span className="text-sm text-black/70 w-full">
                Jan2024
              </span>
            </div>
            <a className="text-sm text-black/70" href="https://my.evtsp.com">
              https://my.evtsp.com
            </a>

          </div>
          <div className="bg-black/5 p-2 rounded-md w-full" >
            <h1>Parsian Bank Signature (PWA)</h1>
            <div className="flex gap-2  tems-center  py-2 ">
              <Calendar className=" text-black/70 size-3" />
              <span className="text-sm text-black/70 w-full">
                Aug2025
              </span>
            </div>
            <a className="text-sm text-black/70" href="https://my.evtsp.com">
              https://parsian-bank.ir
            </a>

          </div>


        </div>



        {/* ------------------ */}

        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Star className="size-5" />
          <span>Licenses & certifications</span>
        </div>

        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>Software Architecture and Clean Code Design in OOP</h1>
          <div className="flex gap-2  tems-center  py-2 ">
            <Calendar className=" text-black/70 size-3" />
            <span className="text-sm text-black/70 w-full">
              Mar2025
            </span>
          </div>
          <p className="text-sm text-black/70">
            Udemy
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>Next.js</h1>
          <div className="flex gap-2  tems-center  py-2 ">
            <Calendar className=" text-black/70 size-3" />
            <span className="text-sm text-black/70 w-full">
              Mar2025
            </span>
          </div>
          <p className="text-sm text-black/70">
            Codeyad
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>Learn SQL in 3 Hours : A tutorial for fast learners</h1>
          <div className="flex gap-2  tems-center  py-2 ">
            <Calendar className=" text-black/70 size-3" />
            <span className="text-sm text-black/70 w-full">
              Apr2024
            </span>
          </div>
          <p className="text-sm text-black/70">
            Udemy
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>Html css bootstrap</h1>
          <div className="flex gap-2  tems-center  py-2 ">
            <Calendar className=" text-black/70 size-3" />
            <span className="text-sm text-black/70 w-full">
              Aug2022
            </span>
          </div>
          <p className="text-sm text-black/70">
            Udemy
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>Foundations of User Experience (UX) Design</h1>
          <div className="flex gap-2  tems-center  py-2 ">
            <Calendar className=" text-black/70 size-3" />
            <span className="text-sm text-black/70 w-full">
              Aug2022
            </span>
          </div>
          <p className="text-sm text-black/70">
            Google
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>User Experience for Web Design</h1>
          <p className="text-sm text-black/70">
            LinkedIn
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>The Ultimate SQL Bootcamp : Go From Zero to Hero</h1>
          <p className="text-sm text-black/70">
            Udemy
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>SQL- The Complete Introduction to SQL programming</h1>
          <p className="text-sm text-black/70">
            Udemy
          </p>

        </div>
        <div className="bg-black/5 p-2 rounded-md w-full" >
          <h1>JavaScript Fundamentals</h1>
          <p className="text-sm text-black/70">
            Udemy
          </p>

        </div>

      </div>





    </div>
  );
}
