"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, Clock, Info, Users, Wine, Utensils, Music } from "lucide-react";
import fotoNovios from "../../public/foto.jpeg";
import fotoCeremonia from "../../public/ceremonia.jpeg";

const LilyCorner = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`absolute pointer-events-none opacity-80 ${className}`}
  >
    {/* Nuevo Lirio más realista/elegante */}
    {/* Tallo */}
    <path d="M100 200 C 110 150, 115 100, 100 80" stroke="#8BA888" strokeWidth="2" fill="none" />
    
    {/* Hojas grandes inferiores */}
    <path d="M100 170 Q 50 140, 20 180 Q 70 190, 100 170 Z" fill="#E8F0E4" stroke="#8BA888" strokeWidth="0.5" />
    <path d="M100 150 Q 150 110, 180 140 Q 140 160, 100 150 Z" fill="#E8F0E4" stroke="#8BA888" strokeWidth="0.5" />
    
    {/* Pétalos principales del Lirio */}
    {/* Pétalo trasero superior */}
    <path d="M100 80 C 80 40, 120 10, 100 0 C 80 10, 120 40, 100 80 Z" fill="#Fdfbf7" stroke="#e8dfcf" strokeWidth="1" />
    {/* Pétalos laterales traseros */}
    <path d="M100 80 C 50 50, 20 60, 10 90 C 40 80, 80 70, 100 80 Z" fill="#Fdfbf7" stroke="#e8dfcf" strokeWidth="1" />
    <path d="M100 80 C 150 50, 180 60, 190 90 C 160 80, 120 70, 100 80 Z" fill="#Fdfbf7" stroke="#e8dfcf" strokeWidth="1" />
    
    {/* Pétalos frontales grandes */}
    <path d="M100 80 C 60 100, 30 140, 50 160 C 70 130, 90 100, 100 80 Z" fill="#FFFFFF" stroke="#e8dfcf" strokeWidth="1" />
    <path d="M100 80 C 140 100, 170 140, 150 160 C 130 130, 110 100, 100 80 Z" fill="#FFFFFF" stroke="#e8dfcf" strokeWidth="1" />
    <path d="M100 80 C 80 130, 120 130, 100 170 C 80 130, 120 130, 100 80 Z" fill="#FFFFFF" stroke="#e8dfcf" strokeWidth="1" />

    {/* Estambres y pistilo (Toque dorado) */}
    <path d="M100 80 Q 90 60, 85 45" stroke="#D4B872" strokeWidth="1.5" fill="none" />
    <circle cx="85" cy="45" r="2.5" fill="#c19a6b" />
    
    <path d="M100 80 Q 110 60, 115 45" stroke="#D4B872" strokeWidth="1.5" fill="none" />
    <circle cx="115" cy="45" r="2.5" fill="#c19a6b" />
    
    <path d="M100 80 Q 100 50, 100 35" stroke="#c19a6b" strokeWidth="2" fill="none" />
    <circle cx="100" cy="35" r="3.5" fill="#c19a6b" />
    
    {/* Detalles de nervaduras en pétalos frontales */}
    <path d="M100 80 Q 80 110, 60 140" stroke="#F4F8F3" strokeWidth="1" fill="none" />
    <path d="M100 80 Q 120 110, 140 140" stroke="#F4F8F3" strokeWidth="1" fill="none" />
  </svg>
);

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  return (
    <main className="flex min-h-[100dvh] w-full flex-col items-center justify-center bg-[#fdfbf7] relative">
      {/* Decoración de Fondo - Ocupa toda la pantalla */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <LilyCorner className="absolute bottom-[-10%] left-[-5%] w-64 sm:w-96 md:w-[32rem] h-64 sm:h-96 md:h-[32rem] opacity-60" />
        <LilyCorner className="absolute top-[-10%] right-[-5%] w-64 sm:w-96 md:w-[32rem] h-64 sm:h-96 md:h-[32rem] rotate-180 opacity-60" />
      </div>

      {/* Contenedor Principal: Sin bordes, ocupa toda la pantalla con contenido centrado */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 flex flex-col items-center w-full max-w-5xl min-h-[100dvh] justify-center px-6 py-16 sm:px-14 sm:py-24"
      >
          
          <motion.h2 variants={fadeIn} className="text-sm sm:text-base md:text-xl text-[#7a8c78] mb-6 tracking-[0.25em] uppercase font-semibold">
            ¡Nos Casamos!
          </motion.h2>
          
          <motion.h1 variants={fadeIn} className="font-[family-name:var(--font-great-vibes)] text-6xl sm:text-8xl md:text-9xl text-[#c19a6b] mb-8 leading-tight py-2 drop-shadow-sm">
            Carolina <span className="text-[#5a6c58] text-5xl sm:text-7xl">&amp;</span> Sergio
          </motion.h1>

          <motion.div variants={fadeIn} className="relative w-56 h-56 sm:w-72 sm:h-72 mb-10 rounded-full overflow-hidden border-4 border-[#e8dfcf] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center bg-[#f4f1ea]">
            {/* Imagen de los novios */}
            <Image
              src={fotoNovios}
              alt="Carolina y Sergio"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-xl sm:text-2xl md:text-3xl text-[#4a4a4a] mb-14 max-w-2xl mx-auto leading-relaxed text-center">
            Os invitamos a celebrar el día más importante de nuestras vidas junto a nosotros.
          </motion.p>
          
          {/* Fecha */}
          <motion.div variants={fadeIn} className="flex flex-col items-center w-full mb-12 space-y-5">
            <div className="flex items-center justify-center w-full max-w-sm">
              <div className="h-[1px] bg-[#c19a6b] flex-1"></div>
              <Calendar className="mx-6 text-[#c19a6b]" size={28} strokeWidth={1.5} />
              <div className="h-[1px] bg-[#c19a6b] flex-1"></div>
            </div>
            
            <div className="flex items-center justify-center gap-4 sm:gap-8 text-2xl sm:text-3xl tracking-[0.1em] text-[#333333]">
              <span className="uppercase font-semibold w-28 text-right">Sábado</span>
              <span className="w-[2px] h-14 bg-[#c19a6b]"></span>
              <span className="text-5xl sm:text-7xl font-bold text-[#5a6c58]">3</span>
              <span className="w-[2px] h-14 bg-[#c19a6b]"></span>
              <span className="uppercase font-semibold w-28 text-left">Octubre</span>
            </div>
            <p className="text-2xl sm:text-4xl tracking-[0.2em] text-[#7a8c78] mt-3 font-medium">
              2026
            </p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex items-center gap-3 text-lg sm:text-2xl mb-14 text-[#4a4a4a] bg-white/70 py-3 px-8 rounded-full border border-[#e8dfcf] shadow-sm backdrop-blur-sm">
            <Clock size={24} className="text-[#c19a6b]" />
            A las 13:00 Horas
          </motion.div>
          
          {/* Lugar */}
          <motion.div variants={fadeIn} className="mb-14 flex flex-col items-center bg-[#f4f8f3]/80 max-w-2xl w-full rounded-3xl border border-[#dce5da] shadow-md backdrop-blur-sm overflow-hidden">
            {/* Imagen de la ceremonia ancha y a la mitad de altura con filtro blanco y negro */}
            <div className="relative w-full h-48 sm:h-64 border-b border-[#dce5da]">
              <Image
                src={fotoCeremonia}
                alt="Lugar de la Ceremonia - Gaztelubide"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
            
            <div className="p-8 sm:p-10 flex flex-col items-center">
              <MapPin size={36} className="text-[#7a8c78] mb-4" />
              <p className="text-[#5a6c58] mb-2 text-sm sm:text-base uppercase tracking-[0.2em] font-bold">Lugar de Celebración</p>
              <h3 className="text-3xl sm:text-4xl tracking-[0.1em] text-[#c19a6b] uppercase font-bold mb-4 mt-1">
                Gaztelubide
              </h3>
              <p className="text-[#4a4a4a] text-lg sm:text-xl text-center leading-relaxed">
                Carretera Las Rozas - El Escorial km 5<br />
                Las Rozas de Madrid, Madrid
              </p>
            </div>
          </motion.div>

          {/* Itinerario (Timeline) */}
          <motion.div variants={fadeIn} className="mb-16 w-full max-w-lg">
            <h3 className="text-2xl sm:text-3xl tracking-[0.15em] text-[#7a8c78] uppercase font-bold mb-10 text-center">
              Itinerario
            </h3>
            
            <div className="relative border-l-2 border-[#e8dfcf] ml-4 sm:ml-6 space-y-10 pb-4">
              {/* Evento 1: Llegada */}
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-[-17px] top-1 bg-[#fdfbf7] p-1 rounded-full border-2 border-[#c19a6b]">
                  <Users size={20} className="text-[#c19a6b]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="text-xl font-bold text-[#5a6c58]">13:00</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#333333]">Llegada de invitados</h4>
                </div>
                <p className="text-[#5a5a5a] text-base leading-relaxed">
                  Os esperamos un ratito antes para ir acomodándoos y prepararlo todo para la ceremonia.
                </p>
              </div>

              {/* Evento 2: Ceremonia */}
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-[-17px] top-1 bg-[#fdfbf7] p-1 rounded-full border-2 border-[#c19a6b]">
                  <Heart size={20} className="text-[#c19a6b]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="text-xl font-bold text-[#5a6c58]">13:30</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#333333]">Ceremonia Civil</h4>
                </div>
                <p className="text-[#5a5a5a] text-base leading-relaxed">
                  ¡El momento del "Sí, quiero"! Empezaremos puntuales y tendrá una duración de 45 minutos.
                </p>
              </div>

              {/* Evento 3: Cóctel */}
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-[-17px] top-1 bg-[#fdfbf7] p-1 rounded-full border-2 border-[#c19a6b]">
                  <Wine size={20} className="text-[#c19a6b]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="text-xl font-bold text-[#5a6c58]">14:30</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#333333]">Cóctel de Bienvenida</h4>
                </div>
                <p className="text-[#5a5a5a] text-base leading-relaxed">
                  A continuación de la ceremonia, disfrutaremos de un aperitivo mientras nos hacemos unas fotos con vosotros.
                </p>
              </div>

              {/* Evento 4: Almuerzo */}
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-[-17px] top-1 bg-[#fdfbf7] p-1 rounded-full border-2 border-[#c19a6b]">
                  <Utensils size={20} className="text-[#c19a6b]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="text-xl font-bold text-[#5a6c58]">15:30</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#333333]">Paso al Salón y Almuerzo</h4>
                </div>
                <p className="text-[#5a5a5a] text-base leading-relaxed">
                  Entrada formal al salón para dar comienzo al banquete y seguir celebrando. La comida tendrá una duración aproximada de 3 horas.
                </p>
              </div>

              {/* Evento 5: Discoteca */}
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-[-17px] top-1 bg-[#fdfbf7] p-1 rounded-full border-2 border-[#c19a6b]">
                  <Music size={20} className="text-[#c19a6b]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="text-xl font-bold text-[#5a6c58]">18:30</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#333333]">¡Discoteca y Barra Libre!</h4>
                </div>
                <p className="text-[#5a5a5a] text-base leading-relaxed">
                  ¡Que empiece la fiesta! Música, bailes, copas y mucha diversión para el resto del día.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* RSVP Footer */}
          <motion.div variants={fadeIn} className="pt-10 border-t border-[#e8dfcf] w-full max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-[#7a8c78] text-xl sm:text-2xl mb-8 italic text-center">
              Se ruega confirmación antes del 30 de Junio
            </p>
            
            <a 
              href="https://wa.me/34606550087?text=¡Hola%20Carolina%20y%20Sergio!%20Confirmo%20mi%20asistencia%20a%20la%20boda.%20(Nota:%20Alergias/Dietas:%20...)"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 sm:py-5 px-10 rounded-full transition-all duration-300 font-sans tracking-wide text-lg sm:text-xl font-semibold shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirmar por WhatsApp
            </a>
            
            <div className="mt-8 flex items-start gap-4 bg-white/70 p-5 rounded-2xl text-left border border-[#e8dfcf] shadow-sm backdrop-blur-sm max-w-lg">
              <Info className="text-[#c19a6b] shrink-0 mt-0.5" size={24} />
              <p className="text-base sm:text-lg leading-snug text-[#5a5a5a]">
                Por favor, escríbenos para avisarnos de problemas alimenticios, alergias o si necesitas menú vegetariano.
              </p>
            </div>
            
            <motion.div variants={fadeIn} className="mt-16 flex items-center justify-center gap-3 text-[#c19a6b]">
              <Heart size={20} fill="currentColor" className="opacity-60" />
              <span className="h-[1px] w-16 bg-[#c19a6b] opacity-30"></span>
              <Heart size={28} fill="currentColor" className="opacity-80" />
              <span className="h-[1px] w-16 bg-[#c19a6b] opacity-30"></span>
              <Heart size={20} fill="currentColor" className="opacity-60" />
            </motion.div>
          </motion.div>
      </motion.div>
    </main>
  );
}