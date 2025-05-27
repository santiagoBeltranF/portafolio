"use client";

import React from "react";
import { DialogBox } from "@/components/ui/dialog-box";
import { StatBar } from "@/components/ui/stat-bar";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/contexts/i18n-context";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="game-container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="pixel-corners bg-card p-6 border-2 border-primary">
              <div className="text-center mb-6">
                <img
                  src="/images/pixel-programmer.png"
                  alt={t('about.avatar.title')}
                  className="w-24 h-24 mx-auto object-contain mb-4"
                />
                <h2 className="text-xl font-pixel text-primary">{t('about.avatar.title')}</h2>
                <p className="text-xs text-muted-foreground">{t('about.avatar.subtitle')}</p>
              </div>

              <div className="space-y-4">
                <StatBar
                  type="health"
                  value={95}
                  maxValue={100}
                  label={t('about.avatar.stats.energy')}
                />
                <StatBar
                  type="mana"
                  value={80}
                  maxValue={100}
                  label={t('about.avatar.stats.creativity')}
                />
                <StatBar
                  type="experience"
                  value={75}
                  maxValue={100}
                  label={t('about.avatar.stats.experience')}
                />
                <StatBar
                  type="skill"
                  value={85}
                  maxValue={100}
                  label={t('about.avatar.stats.problemSolving')}
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-muted p-3 rounded-sm text-center">
                  <p className="text-xs font-pixel">{t('about.avatar.metrics.projects')}</p>
                  <p className="text-lg font-bold">5</p>
                </div>
                <div className="bg-muted p-3 rounded-sm text-center">
                  <p className="text-xs font-pixel">{t('about.avatar.metrics.years')}</p>
                  <p className="text-lg font-bold">1.5+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-pixel text-primary mb-6">{t('about.characterProfile')}</h2>

            <DialogBox
              text={t('about.dialog.developer')}
              speaker={t('about.dialog.speaker')}
              avatar="/images/pixel-programmer.png"
              className="mb-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="p-4 pixel-corners">
                <h3 className="font-pixel text-primary text-sm mb-2">{t('about.cards.background.title')}</h3>
                <p className="text-sm">{t('about.cards.background.text')}</p>
              </Card>

              <Card className="p-4 pixel-corners">
                <h3 className="font-pixel text-primary text-sm mb-2">{t('about.cards.mission.title')}</h3>
                <p className="text-sm">{t('about.cards.mission.text')}</p>
              </Card>

              <Card className="p-4 pixel-corners">
                <h3 className="font-pixel text-primary text-sm mb-2">{t('about.cards.abilities.title')}</h3>
                <ul className="text-sm space-y-1">
                  <li>{t('about.cards.abilities.item1')}</li>
                  <li>{t('about.cards.abilities.item2')}</li>
                  <li>{t('about.cards.abilities.item3')}</li>
                </ul>
              </Card>

              <Card className="p-4 pixel-corners">
                  <h3 className="font-pixel text-primary text-sm mb-2">{t('about.cards.microservices.title')}</h3>
                  <ul className="text-sm space-y-1">
                      <li>{t('about.cards.microservices.item1')}</li>
                      <li>{t('about.cards.microservices.item2')}</li>
                      <li>{t('about.cards.microservices.item3')}</li>
                      <li>{t('about.cards.microservices.item4')}</li>
                      <li>{t('about.cards.microservices.item5')}</li>
                  </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}