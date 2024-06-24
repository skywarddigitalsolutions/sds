import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import FotoCerebro from "../../public/manocerebro.png";

export default function Hero() {
  const words = `Llevamos tu marca al siguiente nivel`;

  return (
    <div
      className="max-h-screen relative bg-black grid justify-center items-center mt-24 lg:mt-0 grid-cols-1 lg:grid-cols-2 mb-auto"
      style={{
        backgroundImage: `url('fondo.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="grid justify-center z-10 sm:mt-20 lg:mt-10 mx-5">
          <h1 className="text-white text-center lg:text-left mt-10 text-5xl lg:text-8xl font-extrabold mb-1">
            {" "}
            Skyward{" "}
          </h1>
          <h2 className="text-secundario text-center lg:text-left text-5xl lg:text-8xl font-extrabold mb-5">
            {" "}
            Digital Solutions
          </h2>
          <TextGenerateEffect
            words={words}
            className="text-center text-white lg:text-left text-xl lg:text-1xl font-bold"
          />
          <div
            id="button"
            className="text-center text-xs xl:text-xl lg:text-left flex justify-center xl:justify-start gap-5"
          >
            <button className=" mt-10 px-4 lg:px-12 py-4 rounded-xl bg-secundario/50 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[white] hover:text-secundario transition-colors duration-200">
              Contactános
            </button>
            <Link href="#Proyectos">
            <button className=" mt-10 px-4 lg:px-12  py-4 rounded-xl bg-white font-bold text-secundario tracking-widest uppercase transform hover:scale-105 hover:bg-[white] hover:text-secundario transition-colors duration-200">
              Ver Proyectos
            </button>
            </Link>
          </div>
        </div>
        <div className=" mt-12 lg:mt-0 flex justify-center items-center">
          <Image src={FotoCerebro} alt="imagen cerebro" />
        </div>
    
    </div>
  );
}
