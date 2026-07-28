import skills from "../../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <SkillCard
          key={skill.title}
          skill={skill}
        />
      ))}
    </div>
  );
}