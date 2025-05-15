import type { FC } from "react";

export type Skill = {
  id: string;
  tech: string;
  description: string;
  level: 1 | 2 | 3 | 4 | 5;
};

const SkillCard: FC<Skill> = ({ tech, description, level }) => (
    <article
        className="
            flex flex-col gap-3 sm:flex-row sm:items-center
            rounded-xl border border-neutral-200 bg-white/80 shadow-sm
            dark:border-neutral-700 dark:bg-neutral-900/60
            px-6 py-4 w-full backdrop-blur">

    <h3 className="text-xl font-semibold flex-1">{tech}</h3>

    {/* Barre de niveau */}
    <div className="flex items-center gap-1" aria-label={`Niveau ${level} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-6 rounded-full ${
            i < level ? "bg-black dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"
          }`}
        />
      ))}
    </div>

    <p className="sm:flex-1 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
  </article>
);

export default SkillCard;
