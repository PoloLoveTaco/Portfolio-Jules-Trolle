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
    { id: "react", tech: "React", description: "JavaScript library for building user interfaces.", level: 3 },
    { id: "next",  tech: "Next.js", description: "Full-stack React framework with server-side rendering.", level: 3 },
    { id: "tailwindcss", tech: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", level: 4 },
    { id: "html", tech: "HTML", description: "Standard markup language for web pages.", level: 4 },
    { id: "css", tech: "CSS", description: "Style sheet language used to describe the look of web content.", level: 5 },
    { id: "php", tech: "PHP", description: "Scripting language used primarily for web development.", level: 4 },
    { id: "javascript", tech: "JavaScript", description: "High-level programming language for interactive web features.", level: 3 },
    { id: "mysql", tech: "MySQL", description: "Relational database management system.", level: 3 },
  ],
  gamecreation: [
    { id: "unity", tech: "Unity", description: "Real-time 2D/3D game engine for multiplatform development.", level: 3 },
    { id: "godot", tech: "Godot", description: "Open-source 2D and 3D game engine.", level: 4 },
    { id: "gamemaker", tech: "GameMaker", description: "Game engine focused on 2D game development.", level: 3 },
    { id: "rpgmaker", tech: "RPG Maker", description: "Tool for creating 2D role-playing games with no coding required.", level: 3 },
    { id: "aseprite", tech: "Aseprite", description: "Pixel art tool for creating 2D animations and sprites.", level: 4 },
    { id: "tiled", tech: "Tiled", description: "2D level editor for tile-based maps.", level: 3 },
  ],
  systemsscripting: [
    { id: "c++", tech: "C++", description: "General-purpose programming language with low-level memory access.", level: 4 },
    { id: "c", tech: "C", description: "Procedural programming language used in system and embedded software.", level: 4 },
    { id: "c#", tech: "C#", description: "Object-oriented language commonly used with Unity.", level: 3 },
    { id: "python", tech: "Python", description: "Versatile high-level programming language with simple syntax.", level: 4 },
    { id: "gd script", tech: "GD Script", description: "Scripting language designed for Godot engine.", level: 5 },
    { id: "sql", tech: "SQL", description: "Language for managing data in relational databases.", level: 2 },
  ],
  tools: [
    { id: "git", tech: "Git", description: "Distributed version control system.", level: 4 },
    { id: "vscode", tech: "VSCode", description: "Popular source-code editor developed by Microsoft.", level: 4 },
    { id: "bun", tech: "Bun", description: "Fast JavaScript runtime and package manager.", level: 3 },
    { id: "github", tech: "GitHub", description: "Platform for hosting and collaborating on Git repositories.", level: 4 },
    { id: "jira", tech: "Jira", description: "Project management tool for tracking issues and tasks.", level: 3 },
    { id: "notion", tech: "Notion", description: "All-in-one workspace for notes, databases, and collaboration.", level: 4 },
    { id: "bitbucket", tech: "Bitbucket", description: "Git-based source code repository hosting service.", level: 4 },
    { id: "docker", tech: "Docker", description: "Platform for containerizing applications and environments.", level: 2 },
    { id: "figma", tech: "Figma", description: "Collaborative UI/UX design and prototyping tool.", level: 2 },
  ],
};


export default function SkillsPage() {
  return (
    <div className="flex justify-center py-12">
      <TagSwitcher tabs={tabs} skillsByTab={skillsByTab} />
    </div>
  );
}
