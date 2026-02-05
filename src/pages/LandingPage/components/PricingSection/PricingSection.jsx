import { TranslationTagsComPrefixo as TComTag } from '@/shared/TranslationTagsComPrefixo';

import useControleDeTraducao from '@/shared/useControleDeTraducao';

import Planos from './Planos';

import './PricingSection.css';

export default function PricingSection() {
  // eslint-disable-next-line no-unused-vars
  const { t, tFormatado, chaveComPrefixo } = useControleDeTraducao("planos");

  return (
    <section id="sextaTela" className='frames'>
      <div className='backgroundLeft'></div>
      <div className='backgroundMid'></div>


      <div className='blocoDeTexto'>
        <h2>{tFormatado("section6.subtitulo")}</h2>
        <p>
          <TComTag
            i18nKey={"section6.descricao"}
            components={{ span: <span className='destaqPreto' /> }}
          />
        </p>
      </div>

      <Planos />

      <div className='backgroundRight'></div>
    </section>
  );
}