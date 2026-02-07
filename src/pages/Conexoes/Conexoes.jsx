import React from "react";
import { Link } from "react-router-dom";

import useControleDeTraducao from "@/shared/useControleDeTraducao";

import HeaderHome from "../Home/components/HeaderHome";
import Footer from "@/components/layout/Footer";
import EventSearch from "./EventSearch";

import bgShapeWhite from "./img/bg-shape-white.webp";
import bgShapeColorful from "./img/bg-shape-colorful.webp";
import bgForm from "./img/bg-form.webp";

import "./Conexoes.css"; // Certifique-se de que este arquivo CSS está no caminho correto

export default function Conexoes() {
  const { t, tFormatado } = useControleDeTraducao();

  return (
    <main id="Conexoes">
      <div className="containerAmarelo">
        <img src={bgShapeWhite} alt="forma" />
        <h2>{t("liveStream")}</h2>
      </div>
      <HeaderHome />
      <h3 id="historico">{t("volunteerHistory")}</h3>

      <div className="Container-conexoes">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/PzUZsoyMXuY?si=2K-g3iGwXubhEwCc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="Video-Esquerdo">
          <iframe
            width="300"
            height="150"
            src="https://www.youtube.com/embed/pU7bVeJ5M5c?si=32ASC7VW0jxM0rOS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/i96z2ZKsCeI?si=-jb9WbvRICioN7sZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="botao">
        <button>{t("historic")}</button>
      </div>

      <img src={bgShapeColorful} alt="forma2" className="forma2" />

      <div className="Seja-voluntario">
        <img src={bgForm} alt="imgFormulario" className="imgFormulario" />
        <div className="textoVoluntario">
          <h3>{tFormatado("becomeSpeaker")}</h3>
          <p>{t("workExperiences")}</p>
          <Link to="/inscricaoVoluntario">
            <button>{t("becomeVolunteer")}</button>
          </Link>
        </div>
      </div>

      <div className="Eventos-externos">
        <EventSearch />
      </div>

      <Footer />
    </main>
  );
}
