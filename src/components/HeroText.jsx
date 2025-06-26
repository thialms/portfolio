import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = [
    "produtos",
    "sistemas",
    "experiências",
    "soluções",
    "interfaces",
    "aplicações",
    "inovações",
    "projetos",
  ];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Visualizacao Desktop */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Olá, sou o Thiago.
        </motion.h1>
        <div className="text-5xl font-medium">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Um Desenvolvedor <br />
            apaixonado em criar
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className="text-7xl" />
          </motion.div>
        </div>
      </div>
      {/* Visualizacao Mobile */}
      <div className="flex flex-col space-y-3 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Olá, sou o Thiago.
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Criando
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-6xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
