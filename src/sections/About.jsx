import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = ({ theme }) => {
  const grid2Container = useRef();
  const cardImages = [
    "assets/logos/csharp-pink.png",
    "assets/logos/cplusplus.svg",
    "assets/logos/html5.svg",
    "assets/logos/css3.svg",
    "assets/logos/react.svg",
    "assets/logos/tailwindcss.svg",
    "assets/logos/java.svg",
    "assets/logos/laravel.svg",
    "assets/logos/php.svg",
    "assets/logos/threejs.svg",
    "assets/logos/vitejs.svg",
    "assets/logos/visualstudiocode.svg",
    "assets/logos/git.svg",
    "assets/logos/github.svg",
    "assets/logos/javascript.svg",
  ];

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">Sobre Mim</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* GRID 1 */}
        <div className="flex items-end grid-1 grid-default-color">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5rem]"
          />
          <div
            className={`z-10 ${
              theme === "light"
                ? "rounded-lg bg-black/20 "
                : ""
            }`}
          >
            <p className="headtext text-white">Olá, sou o Thiago.</p>
            <p className="text-white text-sm md:text-base text-pretty">
              Atualmente estou cursando Desenvolvimento de Software
              Multiplataforma e estou empolgado com meu crescimento como
              Desenvolvedor Full Stack.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* GRID 2 */}
        <div className="grid-2 grid-default-color">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CÓDIGO É ARTE
            </p>
            {cardImages.map((image, index) => (
              <Card
                key={index}
                style={{
                  rotate: `${Math.random() * 90 - 45}deg`,
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                image={image}
                containerRef={grid2Container}
              />
            ))}
          </div>
        </div>
        {/* GRID 3 */}
        <div className="grid-3 grid-black-color">
          <div className="z-10 w-[50%]">
            <p className="headtext">Disponibilidade</p>
            <p className="subtext">
              Residente no Brasil, estou disponível para colaborar em projetos
              remotos com equipes globais.
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe theme={theme} />
            </figure>
          </div>
        </div>
        {/* GRID 4 */}
        <div className="grid-4 grid-special-color">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Vamos construir algo incrível juntos?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* GRID 5 */}
        <div className="grid-5 grid-default-color">
          <div className="z-10 w-[50%]">
            <p className="headtext">Teck Stack</p>
            <p className="subtext">
              Tenho me dedicado ao estudo aprofundado de diversas linguagens e
              frameworks, com especialização e foco principal no ecossistema
              Java para o backend e React para o frontend, buscando construir
              soluções robustas e escaláveis.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-8 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
