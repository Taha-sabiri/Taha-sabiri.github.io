'use client'
import { Calendar, File, Info, Star } from "lucide-react";

import { useEffect, useState } from "react";
import { Root } from "./_type/siteData";
import Loading from "./loading";
import Link from "next/link";

export default function Home() {

  const [siteData, setSiteData] = useState<Root>()

  async function getSiteData() {
    const response = await fetch("/api/information");
    const data = await response.json();
    setSiteData(data)
  }

  useEffect(() => {
    setTimeout(() => {
      getSiteData()
    }, 2000);

  }, [])

  if (!siteData) {
    return <Loading />
  }
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
          {siteData?.info[0].desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {
            siteData?.social.map(item =>
              <div className="py-1 px-4 rounded-full border border-black/10">
                <a href={item.link}>
                  <span>{item.title}</span>
                </a>
              </div>
            )
          }
        </div>

        {/* ------------------ */}
        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Skills</span>
        </div>

        <div className="flex gap-2 mt-1 flex-wrap">
          {
            siteData?.skills.map(item =>
              <div className="py-1 px-4 rounded-full border border-black/10">
                <span>{item.name}</span>
              </div>)
          }
        </div>


        {/* ------------------ */}
        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Familiar with</span>
        </div>
        <div className="flex gap-2 mt-1 flex-wrap">

          {
            siteData?.familerWith.map(item =>
              <div className="py-1 px-4 rounded-full border border-black/10">
                <span>{item.name}</span>
              </div>)
          }
        </div>

        {/* ------------------ */}

        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Experience</span>
        </div>
        <div className="flex gap-2 mt-1 flex-wrap">
          {
            siteData?.experience.map(item =>
              <div className="bg-black/5 p-2 rounded-md" >
                <h1>{item.title}</h1>
                <div className="flex gap-2  tems-center  py-2 ">
                  <Calendar className=" text-black/70 size-3" />
                  <span className="text-sm text-black/70 w-full">
                    {item.sub}
                  </span>
                </div>
                <p className="text-sm text-black/70">
                  {item.desc}
                </p>

              </div>
            )
          }
        </div>

        {/* ------------------- */}
        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Info className="size-5" />
          <span>Project</span>
        </div>
        <div className="flex gap-2 mt-1 flex-wrap">
          {
            siteData?.project.map(item =>
              <div className="bg-black/5 p-2 rounded-md w-full" >
                <h1>{item.title}</h1>
                <div className="flex gap-2  tems-center  py-2 ">
                  <Calendar className=" text-black/70 size-3" />
                  <span className="text-sm text-black/70 w-full">
                    {item.date}
                  </span>
                </div>
                <Link href={item.link}>
                  <p className="text-sm text-black/70">
                    {item.link}
                  </p>
                </Link>

              </div>
            )
          }
        </div>

        {/* ------------------ */}

        <div className="flex  gap-2  text-black/70 mt-5 border-t border-black/10 w-full pt-4 items-center">
          <Star className="size-5" />
          <span>Licenses & certifications</span>
        </div>

        {
          siteData?.licenses.map(item =>

            <div className="bg-black/5 p-2 rounded-md w-full" >
              <h1>{item.title}</h1>
              {item.date && <div className="flex gap-2  tems-center  py-2 ">
                <Calendar className=" text-black/70 size-3" />
                <span className="text-sm text-black/70 w-full">
                  {item.date}
                </span>
              </div>}
              <p className="text-sm text-black/70">
                {item.education}
              </p>
            </div>

          )
        }

      </div>

    </div>
  );
}
