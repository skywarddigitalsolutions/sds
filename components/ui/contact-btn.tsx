"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState<string | null>("");
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const dropIn = {
    hidden: {
      y: "4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "stiff",
        damping: 25,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const onChangeHandler = (value: string) => {
    setMessage(value);
    setError(""); // Limpiamos el error cuando se cambia el mensaje
  };

  const handleSubmit = () => {
    if (!message.trim()) {
      setError("Oops! El mensaje no puede estar vacío.");
      return;
    }

    // Construct WhatsApp message link
    const phoneNumber = "+5491133495502"; // Reemplazar con tu número de teléfono
    const whatsappMessage = "Hola, queremos más información";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Abrir enlace de WhatsApp en una nueva pestaña
    window.open(whatsappLink, "_blank");

    // Limpiar el campo de mensaje después de enviar
    setMessage("");
    setSuccess("Mensaje enviado con éxito."); // Opcional: mostrar mensaje de éxito
  };

  const handleButtonClick = () => {
    setOpen(!open);
    setMessage(""); // Limpiar el campo de mensaje al abrir o cerrar el formulario
    setLoading(false);
    setError(""); // Limpiar cualquier error al abrir o cerrar el formulario
    setSuccess(""); // Limpiar cualquier mensaje de éxito al abrir o cerrar el formulario
  };

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      <div className="fixed right-4 md:right-10 bottom-10 flex flex-col items-end z-[99999]">
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 rounded-xl shadow-2xl bg-primario   flex flex-col overflow-hidden mx-4 md:mx-0"
          >
            <div className="p-4 bg-secundario/40 ">
              <h2 className="text-zinc-200 font-bold text-sm md:text-xl ">
                ¿Queres mejorar tu empresa? 👇
              </h2>
              <small className="hidden md:block text-xs text-zinc-400 mb-10 ">
                Escribinos por whatsapp
              </small>
            </div>
            <div className="content p-6 flex flex-col bg-zinc-800">
              <label className="text-sm font-normal text-zinc-400 mb-2 ">
                Mensaje
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => onChangeHandler(e.target.value)}
                className="text-zinc-400 rounded-md border border-zinc-700 py-1 px-2 bg-zinc-800 focus:outline-none focus:border-gray-400 placeholder:text-sm   mb-1"
                placeholder="Escribe tu mensaje aquí..."
              />
              <small className="h-4 min-h-4 text-red-500 font-semibold mb-4">
                {error && error}
              </small>
              <button
                onClick={handleSubmit}
                className="text-zinc-100  w-full px-4 py-2 md:py-4 border-2 border-zinc-800 bg-zinc-700 rounded-md font-normal text-sm  mb-4 transition duration-200 hover:shadow-none"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {success && (
                <small className="text-green-500 font-semibold text-sm mb-4">
                  {success}
                </small>
              )}
            </div>
          </motion.div>
        )}
        <button
          onClick={handleButtonClick}
          className="bg-primario  w-14 h-14 rounded-full  flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
        >
          <IoLogoWhatsapp className="w-8 h-8 text-zinc-100" />
        </button>
      </div>
    </AnimatePresence>
  );
};
