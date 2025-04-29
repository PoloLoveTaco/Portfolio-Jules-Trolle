import Image from "next/image";

import Navbar from "@/components/navbar";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Projects() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <ProjectsCarousel />
    </main>
  );
}
