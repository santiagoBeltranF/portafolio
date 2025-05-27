"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { skillsData, Skill as SkillType } from "@/data/portfolio-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Code, Server } from "lucide-react";
import { useI18n, TranslationKey } from "@/contexts/i18n-context";

interface SkillNodeProps {
  skill: SkillType;
}

const SkillNode: React.FC<SkillNodeProps> = ({ skill }) => {
  const { t } = useI18n();
  const MAX_POINTS = 5;
  const filledPoints = Math.round((skill.dataLevel / 100) * MAX_POINTS);
  const skillTitle = t(skill.titleKey);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="skill-node group relative flex flex-col items-center p-3 sm:p-4 border-2 border-primary/30 bg-card/80 pixel-corners hover:bg-primary/10 hover:border-primary transition-all duration-200 cursor-default shadow-md hover:shadow-primary/30">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 flex items-center justify-center">
              <img
                src={skill.icon || "/images/pixel-skill.png"}
                alt={skillTitle}
                className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-200 blur-sm"></div>
            </div>

            <p className="font-pixel text-xs sm:text-sm text-center text-foreground group-hover:text-primary truncate w-full">
              {skillTitle}
            </p>

            <div className="flex gap-1 mt-2">
              {Array.from({ length: MAX_POINTS }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 border border-primary/50 rounded-sm transition-colors duration-200
                    ${i < filledPoints ? 'bg-primary animate-pulse-skill-point' : 'bg-muted/30 group-hover:bg-primary/20'}`}
                ></div>
              ))}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="font-pixel bg-card border-primary text-primary-foreground">
          <p className="text-sm font-semibold">{skillTitle}</p>
          <p className="text-xs text-primary-foreground/90">{t('skills.tooltip.level')}: {t(skill.levelTextKey)} ({skill.dataLevel}/100)</p>
          {skill.descriptionKey && <p className="text-xs text-primary-foreground/70 mt-1 max-w-[200px]">{t(skill.descriptionKey)}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface SkillBranchProps {
  titleKey: Extract<TranslationKey, "skills.frontendPath" | "skills.backendPath">;
  skills: SkillType[];
  icon?: React.ReactNode;
}

const SkillBranch: React.FC<SkillBranchProps> = ({ titleKey, skills, icon }) => {
  const { t } = useI18n();
  return (
    <Card className="skill-branch p-4 sm:p-6 pixel-corners border-2 border-primary/50 shadow-xl bg-background/70 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3 mb-6">
        {icon && <div className="text-primary">{icon}</div>}
        <h3 className="font-pixel text-xl sm:text-2xl text-primary text-center uppercase tracking-wider">
          {t(titleKey)}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {skills.map((skill: SkillType) => (
          <SkillNode key={skill.titleKey} skill={skill} />
        ))}
      </div>
    </Card>
  );
};

export function SkillsSection() {
  const { t } = useI18n();
  const frontendSkills = skillsData.filter(skill => skill.category === "frontend");
  const backendSkills = skillsData.filter(skill => skill.category === "backend");

  frontendSkills.sort((a, b) => b.dataLevel - a.dataLevel);
  backendSkills.sort((a, b) => b.dataLevel - a.dataLevel);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-muted/50">
      <div className="game-container">
        <header className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-pixel text-primary mb-3">
            {t('skills.title')}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-pixel tracking-wide">
            {t('skills.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <SkillBranch
            titleKey="skills.frontendPath"
            skills={frontendSkills}
            icon={<Code className="w-8 h-8 sm:w-10 sm:h-10" />}
          />
          <SkillBranch
            titleKey="skills.backendPath"
            skills={backendSkills}
            icon={<Server className="w-8 h-8 sm:w-10 sm:h-10" />}
          />
        </div>
      </div>
    </section>
  );
}