import { Link } from "react-router-dom";

import useControleDeTraducao from "@/shared/useControleDeTraducao";

import logoOff from "./img/logo-off.webp";
import socialInstagram from "./img/social-instagram.webp";
import socialTiktok from "./img/social-tiktok.webp";
import socialLinkedin from "./img/social-linkedin.webp";
import socialGithub from "./img/social-github.webp";

import "./Footer.css";

export default function Footer() {
  const { t, chaveComPrefixo } = useControleDeTraducao("footer");
  const a = 1;

  return (
    <footer id="footer-pre-login">
      <div className="up-footer"></div>
      <section className="footer-top">
        <nav className="link-list">
          <ul>
            <Link to="/sobre">{t(chaveComPrefixo("sobre"))}</Link>
            <Link to="/apoie">{t(chaveComPrefixo("apoio"))}</Link>
            <Link to="/faleConosco">{t(chaveComPrefixo("contato"))}</Link>
          </ul>
          <ul style={{ display: a === 1 ? "none" : "flex" }}>
            <Link to="/conexoes">{t("Connect")}</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/loja">Loja</Link>
          </ul>
        </nav>
        <figure>
          <Link to={a === 1 ? "/" : "/home"}>
            <img src={logoOff} className="logo" alt="Logo" />
          </Link>
          <p>{t(chaveComPrefixo("direitos"))}</p>
        </figure>
      </section>
      <div className="break-bar"></div>
      <section className="footer-bottom">
        <nav className="link-list">
          <Link to="/termos" className="footer-link-list">
            {t(chaveComPrefixo("privacidade"))}
          </Link>
          {/* <Link to="/sobre_nos_1" className="footer-link-list">{t("Privacy")}</Link> */}
          <Link to="/termos" className="footer-link-list">
            {t(chaveComPrefixo("termos"))}
          </Link>
        </nav>
        <nav className="social">
          <a
            href="https://www.instagram.com/buildar_demoday/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={socialInstagram} alt="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@projeto_buildar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={socialTiktok} alt="TikTok" />
          </a>
          <a
            href="https://www.linkedin.com/company/buildaroficial/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={socialLinkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/projeto-buildar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={socialGithub} alt="GitHub" />
          </a>
        </nav>
      </section>
    </footer>
  );
}
