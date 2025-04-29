"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProjectPanel from "@/components/project-panel";

const projects = [
  {
    logo: "/project-logo/PoloFy.jpg",
    name: "PoloFy",
    link: "https://polo-fy.vercel.app/",
    description: "A little website that looks like Spotify made with Next.js + Tailwind.",
  },
  {
    logo: "/project-logo/PoloFy.jpg",
    name: "Crab Coach",
    link: "https://coach-robert.vercel.app/",
    description: "A little website that looks like Spotify made with Next.js + Tailwind.",
  },
  {
    logo: "/project-logo/PoloFy.jpg",
    name: "Moody Street",
    link: "https://polo-fy.vercel.app/",
    description: "A little website that looks like Spotify made with Next.js + Tailwind.",
  },
];

export default function ProjectsCarousel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-zinc-900 rounded-md w-2/3 h-190">
        {projects.map(p => (
        <SwiperSlide key={p.name}>
          <ProjectPanel {...p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
