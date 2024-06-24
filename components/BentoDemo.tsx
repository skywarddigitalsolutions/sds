"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { BsWindowStack } from "react-icons/bs";
import { Tooltip } from "@nextui-org/react";
import { FaPalette } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import Link from "next/link";

interface Proyecto {
  title: string;
  content: string;
  image: string;
  tooltip1: string;
  tooltip2: string;
  tooltip3: string;
  tooltip4: string;
  tooltip5: string;
  link: string;
}

const BentoDemo: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const proyectos: Proyecto[] = [
    {
      title: "Aires de Pausa",
      content: "Descripción breve del Proyecto 1.",
      image: "/screenproyecto1.png",
      tooltip1: "2 colores",
      tooltip2: "5 secciones",
      tooltip3: "14 días",
      tooltip4: "100% personalizado",
      tooltip5: "landing",
      link: "https://www.airesdepausa.com",
    },
    {
      title: "Harmony Haven",
      content: "Descripción breve del Proyecto 2.",
      image: "/screenproyecto1.png",
      tooltip1: "",
      tooltip2: "2 colores",
      tooltip3: "2 colores",
      tooltip4: "2 colores",
      tooltip5: "2 colores",
      link: "",
    },
    {
      title: "Ascensores",
      content: "Descripción breve del Proyecto 3.",
      image: "/screenproyecto1.png",
      tooltip1: "",
      tooltip2: "2 colores",
      tooltip3: "2 colores",
      tooltip4: "2 colores",
      tooltip5: "2 colores",
      link: "",
    },
    {
      title: "Ferreteria",
      content: "Descripción breve del Proyecto 4.",
      image: "/screenproyecto1.png",
      tooltip1: "",
      tooltip2: "2 colores",
      tooltip3: "2 colores",
      tooltip4: "2 colores",
      tooltip5: "2 colores",
      link: "",
    },
    {
      title: "Proyecto 5",
      content: "Descripción breve del Proyecto 5.",
      image: "/screenproyecto1.png",
      tooltip1: "",
      tooltip2: "2 colores",
      tooltip3: "2 colores",
      tooltip4: "2 colores",
      tooltip5: "2 colores",
      link: "",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280); // xl breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (proyecto: Proyecto) => {
    setSelectedProject(proyecto);
    setVisibleTooltip(null);
  };

  const handleTooltipClick = (tooltipKey: string) => {
    if (!isDesktop) {
      setVisibleTooltip(visibleTooltip === tooltipKey ? null : tooltipKey);
    }
  };

  const handleMouseEnter = (tooltipKey: string) => {
    if (isDesktop) {
      setVisibleTooltip(tooltipKey);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setVisibleTooltip(null);
    }
  };

  return (
    <section className="pb-12">
      <div className="px-4">
        <p className="text-lg text-center text-gray-500 mb-8">
          Estos son nuestros proyectos. Hacé click en el proyecto que queres ver
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {proyectos.map((proyecto, index) => (
            <button
              key={index}
              className="px-4 text-sm py-4 rounded-2xl bg-secundario/50 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-white hover:text-secundario transition-colors duration-200"
              onClick={() => handleTabClick(proyecto)}
            >
              {proyecto.title}
            </button>
          ))}
        </div>
        {/* TODO: ESTAMOS REPITIENDO CODIGO, SE NECESITA REFACTORIZAR */}
        {selectedProject ? 
          <div className="  h-auto w-full py-5 rounded-xl flex flex-col md:flex-row justify-center md:justify-around items-center mt-12 xl:mt-20">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-auto w-[280px] lg:w-[400px] mb-12"
            />
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-2xl lg:text-4xl mb-5 font-bold">
                {selectedProject.title}
              </h4>
              <p className="text-center text-xs lg:text-lg mb-5 font-bold">
                {selectedProject.content}
              </p>

              <div className="group inline-flex flex-wrap justify-center items-center gap-3 mb-5">
                <Tooltip
                  content={selectedProject.tooltip1}
                  isOpen={visibleTooltip === "tooltip1"}
                >
                  <span
                    className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10"
                    onClick={() => handleTooltipClick("tooltip1")}
                    onMouseEnter={() => handleMouseEnter("tooltip1")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <FaPalette className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip
                  content={selectedProject.tooltip2}
                  isOpen={visibleTooltip === "tooltip2"}
                >
                  <span
                    className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10"
                    onClick={() => handleTooltipClick("tooltip2")}
                    onMouseEnter={() => handleMouseEnter("tooltip2")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <BsWindowStack className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip
                  content={selectedProject.tooltip3}
                  isOpen={visibleTooltip === "tooltip3"}
                >
                  <span
                    className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10"
                    onClick={() => handleTooltipClick("tooltip3")}
                    onMouseEnter={() => handleMouseEnter("tooltip3")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <IoTimeOutline className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip
                  content={selectedProject.tooltip4}
                  isOpen={visibleTooltip === "tooltip4"}
                >
                  <span
                    className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10"
                    onClick={() => handleTooltipClick("tooltip4")}
                    onMouseEnter={() => handleMouseEnter("tooltip4")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MdOutlineDesignServices className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip
                  content={selectedProject.tooltip5}
                  isOpen={visibleTooltip === "tooltip5"}
                >
                  <span
                    className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10"
                    onClick={() => handleTooltipClick("tooltip5")}
                    onMouseEnter={() => handleMouseEnter("tooltip5")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <FaSitemap className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
              </div>

              <Link
                href={selectedProject.link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-secundario/50 text-md  mt-5 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Ver página
                </button>
              </Link>
            </div>
          </div>
         : 
          <div className="  h-auto w-full py-5 rounded-xl flex flex-col md:flex-row justify-center md:justify-around items-center mt-12 xl:mt-20">
            <img
              src={proyectos[0].image}
              alt={proyectos[0].title}
              className="h-auto w-[280px] lg:w-[400px] mb-12"
            />
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-2xl lg:text-4xl mb-5 font-bold">
                {" "}
                {proyectos[0].title}
              </h4>
              <p className="text-center text-xs lg:text-lg mb-5 font-bold">
                {" "}
                {proyectos[0].content}
              </p>

              <div className="group inline-flex flex-wrap justify-center items-center gap-3 mb-5">
                <Tooltip content={proyectos[0].tooltip1}>
                  <span className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10">
                    <FaPalette className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip content={proyectos[0].tooltip2}>
                  <span className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10">
                    <BsWindowStack className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip content={proyectos[0].tooltip3}>
                  <span className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10">
                    <IoTimeOutline className="text- white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip content={proyectos[0].tooltip4}>
                  <span className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10">
                    <MdOutlineDesignServices className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
                <Tooltip content={proyectos[0].tooltip5}>
                  <span className="cursor-pointer rounded-full border border-white/10 bg-primario/5 p-3 text-white transition-colors hover:border-primario/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-10">
                    <FaSitemap className="text-white h-4 w-4" />
                  </span>
                </Tooltip>
              </div>

              <Link
                href={proyectos[0].link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-secundario/50 text-md  mt-5 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Ver página
                </button>
              </Link>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default BentoDemo;
