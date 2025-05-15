// app/skills/page.tsx
import TagSwitcher, { Tab } from "@/components/tag-switcher";
import { Skill } from "@/components/skill-card";

// Définition statique ou récupérée depuis une DB / CMS
const tabs: Tab[] = [
  { id: "web",   label: "Web" },
  { id: "gamecreation",  label: "Game Creation" },
  { id: "systemsscripting", label: "Systems & Scripting"},
  { id: "tools", label: "Tools" },
];

const skillsByTab: Record<string, Skill[]> = {
  web: [
    { id: "react", tech: "React", description: "Librairie UI pour le web.", level: 3 },
    { id: "next",  tech: "Next.js", description: "Framework full-stack React.", level: 3 },
    { id: "tailwindcss",  tech: "Tailwind CSS", description: "Utility-first CSS framework for fast UI design.", level: 4 },
    { id: "html", tech: "HTML", description: "Librairie UI pour le web.", level: 4 },
    { id: "css", tech: "CSS", description: "Librairie UI pour le web.", level: 5 },
    { id: "php", tech: "PHP", description: "Librairie UI pour le web.", level: 4 },
    { id: "javascript", tech: "JavaScript", description: "Librairie UI pour le web.", level: 3 },
    { id: "mysql", tech: "MySQL", description: "Librairie UI pour le web.", level: 3 },
  ],
  gamecreation: [
    { id: "unity", tech: "Unity", description: "Moteur 3D temps réel.", level: 2 },
    { id: "godot", tech: "Godot", description: "Moteur open-source 2D/3D.", level: 4 },
    { id: "gamemaker", tech: "GameMaker", description: "Moteur open-source 2D/3D.", level: 3 },
    { id: "rpgmaker", tech: "RPG Maker", description: "Moteur open-source 2D/3D.", level: 3 },
    { id: "aseprite", tech: "Aseprite", description: "Moteur open-source 2D/3D.", level: 4 },
    { id: "tiled", tech: "Tiled", description: "2D tile map editor for game development.", level: 3 },
  ],
  systemsscripting: [
    { id: "c++", tech: "C++", description: "Librairie UI pour le web.", level: 4 },
    { id: "c",  tech: "C", description: "Framework full-stack React.", level: 4 },
    { id: "c#", tech: "c#", description: "Librairie UI pour le web.", level: 3 },
    { id: "python", tech: "Pyhton", description: "Librairie UI pour le web.", level: 4 },
    { id: "gd script", tech: "GD Script", description: "Librairie UI pour le web.", level: 5 },
    { id: "sql", tech: "SQL", description: "Query language for relational databases.", level: 2 },
  ],
  tools: [
    { id: "git", tech: "Git", description: "Contrôle de version distribué.", level: 4 },
    { id: "vscode", tech: "VSCode", description: "Contrôle de version distribué.", level: 4 },
    { id: "bun", tech: "Bun", description: "Runtime JavaScript ultra-rapide.", level: 3 },
    { id: "github", tech: "Github", description: "Runtime JavaScript ultra-rapide.", level: 4 },
    { id: "jira", tech: "Jira", description: "Project management and task tracking software.", level: 3 },
    { id: "notion", tech: "Notion", description: "Runtime JavaScript ultra-rapide.", level: 4 },
    { id: "bitbucket", tech: "Bitbucket", description: "Runtime JavaScript ultra-rapide.", level: 4 },
    { id: "docker", tech: "Docker", description: "Containerisation platform for applications and environments.", level: 2 },
    { id: "figma", tech: "Figma", description: "UI/UX design and prototyping tool.", level: 2 },
  ],
};

export default function SkillsPage() {
  return (
    <div className="flex justify-center py-12">
      <TagSwitcher tabs={tabs} skillsByTab={skillsByTab} />
    </div>
  );
}
