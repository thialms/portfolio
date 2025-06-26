import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "cplusplus",
    "csharp",
    "javascript",
    "java",
    "php",
    "html5",
    "css3",
    "react",
    "laravel",
    "tailwindcss",
    "threejs",
    "vitejs",
    "git",
    "github",
    "visualstudiocode",
  ];
  return (
    <div className="relative flex h-[10rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icons = ({ src }) => (
  <img src={src} className="rounded-sm hover:scale-110 duration-200" />
);
