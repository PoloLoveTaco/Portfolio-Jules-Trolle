"use client";
import ProjectPanel from "@/components/project-panel";

export default function ProjectsList() {
  return (
    <div className="m-auto">
      <h2 className="text-5xl font-mono font-bold pb-4 pt-4">Web Project</h2>
      <section className="grid grid-cols-3 gap-4">
        <ProjectPanel name="PoloFy" link="https://polo-fy.vercel.app/" description="A little website that looks like Spotify made with Next.js + Tailwind." />
        <ProjectPanel name="Crab Coach" link="https://coach-robert.vercel.app/" description="A website that help you to progress at league of legends made with Next.js + Tailwind." />
        <ProjectPanel name="Moody Street" link="https://polo-fy.vercel.app/" description="A little website that looks like Spotify made with Next.js + Tailwind." />
      </section>

      <h2 className="text-5xl font-mono font-bold pb-4 pt-10">Video Games Projects</h2>
      <section className="grid grid-cols-3 gap-4">
        <ProjectPanel name="Project M" link="https://polo-fy.vercel.app/" description="An independant MOBA create with a friend by using unity." />
      </section>
    </div>
  );
}
