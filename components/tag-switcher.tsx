// components/TagSwitcher.tsx
"use client";

import { useState } from "react";
import SkillCard, { Skill } from "@/components/skill-card";

/**
 * Onglets + liste de compétences filtrée.
 * Tailwind v4 & Next.js App Router OK sous Bun.
 */

export type Tab = { id: string; label: string };

interface Props {
  /** Liste d’onglets à afficher */
  tabs: Tab[];
  /** Dictionnaire { tabId: Skill[] }  */
  skillsByTab: Record<string, Skill[]>;
  /** Onglet actif au chargement */
  defaultTab?: string;
  /** Classes utilitaires pour le conteneur externe */
  className?: string;
}

export default function TagSwitcher({
  tabs,
  skillsByTab,
  defaultTab = tabs[0].id,
  className = "",
}: Props) {
  const [active, setActive] = useState(defaultTab);

  return (
    <section className={`flex flex-col items-center gap-6 ${className}`}>
      {/* --- Barre d’onglets --- */}
      <div
        className="inline-flex items-center rounded-full bg-neutral-100 p-1 dark:bg-neutral-800"
        role="tablist"
      >
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active === id}
            onClick={() => setActive(id)}
            className={`
              rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color] duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/50
              ${
                active === id
                  ? "bg-black text-white shadow-sm"
                  : "text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* --- Liste filtrée --- */}
      <div className=" grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(skillsByTab[active] ?? []).map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}
