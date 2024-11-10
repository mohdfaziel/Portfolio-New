import {
  js,
  c,
  j,
  py,
  css,
  figma,
  git,
  github,
  html,
  mi,
  react,
  tw,
  vite,
} from "./Icons/Icons";
import Skill from "./skill";
export default function Skills() {
  let skills = [
    { title: "JavaScript", purpose: "Interaction", logo: js },
    { title: "C", purpose: "Programming", logo: c },
    { title: "Java", purpose: "Programming", logo: j },
    { title: "Python", purpose: "Programming", logo: py },
    { title: "CSS", purpose: "User Interface", logo: css },
    { title: "Figma", purpose: "Design Tool", logo: figma },
    { title: "Git", purpose: "Versioning", logo: git },
    { title: "Github", purpose: "Collaboration", logo: github },
    { title: "HTML", purpose: "Structure", logo: html },
    { title: "Material UI", purpose: "Components", logo: mi },
    { title: "React", purpose: "FrameWork", logo: react },
    { title: "Tailwind", purpose: "User Interface", logo: tw },
    { title: "Vite", purpose: "Bundling", logo: vite },
  ];
  return (
    <div
      id="skills"
      className="About w-full px-[2rem] md:px-[10rem] py-[4rem] md:py-[5rem] text-active bg-dark2 min-h-screen flex justify-center items-center"
    >
      <div className="Container w-full max-w-[70rem] gap-7 h-full flex flex-col justify-center items-Start">
        <div className="Upper">
          <h1 className="text-4xl text-active"><span className="border-t-4 border-main">E</span>ssestial Tools I use</h1>
          <p className="text-sm text-unactive">Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.</p>
        </div>
        <div className="Lower w-full flex flex-wrap justify-start items-center gap-3">
        {skills.map((skill, idx) => (
          <Skill
            key={idx}
            title={skill.title}
            purpose={skill.purpose}
            logo={skill.logo}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
