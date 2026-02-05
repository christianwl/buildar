import { useTranslation } from "react-i18next";

import Header from "./HeaderHome";
import Elevadores from "./Elevadores";
import Footer from "@/components/layout/Footer";

import "./banner.css";

// import fundo from './images/image_fundo.webp';
// import { Outlet, Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Header />
      <main>
        <section className="titleTopFrame">
          <h1>{t("chooseFlor")}</h1>
        </section>
        <Elevadores />
      </main>
      <Footer />

      {/* <Link to='/descanso' style={{
                    width: '4.5rem',
                    background: '#9B33FD',
                    padding: '1.5rem',
                    position: 'absolute',
                    top: '40vh',
                    left: '0.5rem',
                    zIndex: '2',
                    fontFamily: 'Passion One, sans-serif',
                    textAlign: 'center',
                    color: 'white'
                }}>{t("restGame")}</Link> */}
    </div>
  );
}
