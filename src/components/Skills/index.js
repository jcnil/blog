import React from "react";
import { SectionTitle } from "../SectionTitle";
import { SkillBar } from "../SkillBar";

const SKILLS = [
  {
    label: "Python",
    value: 100,
  },
  {
    label: "Flask",
    value: 75,
  },
  {
    label: "Fastapi",
    value: 75,
  },
  {
    label: "Django",
    value: 45,
  },
  {
    label: "Falcon",
    value: 75,
  },
  {
    label: "Ruby",
    value: 25,
  },
  {
    label: "Rails",
    value: 25,
  },
  {
    label: "Docker",
    value: 50,
  },
  {
    label: "Docker Compose",
    value: 50,
  },
  {
    label: "Javascript",
    value: 45,
  },
  {
    label: "React JS",
    value: 45,
  },
  {
    label: "Postgres",
    value: 95,
  },
  {
    label: "Mongo",
    value: 80,
  },
  {
    label: "AWS",
    value: 35,
  },
];

export function Skills() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <SectionTitle text="Skills" id="skills" />
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {SKILLS.map((item) => {
              return (
                <div className="relative">
                  <SkillBar skillName={item.label} percentage={item.value} />
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
