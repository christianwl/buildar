import useControleDeTraducao from '@/shared/useControleDeTraducao';

import { TranslationTagsComPrefixo as TComTag } from '@/shared/TranslationTagsComPrefixo';

import viviFigure from './img/vivi-figure.webp'

import './AccessibilitySection.css';

export default function AccessibilitySection() {

  const { chaveComPrefixo } = useControleDeTraducao("section4");
  return (
    <section className='frames' id="quartaTela">
      <article className='section4'>

        <div className='blocoDeTexto'>
          <h2>
            <TComTag
              i18nKey={chaveComPrefixo("subtitulo")}
              components={{ span: <span className='destaqueRoxo' /> }}
            />
          </h2>
          <p>
            <TComTag
              i18nKey={chaveComPrefixo("descricao")}
              components={{ span: <span className='destaqVermelho' /> }}
            />
          </p>
        </div>

        <figure className='figuraVivi'>
          <img alt='mascote da Buildar "Vivi", fazendo uma pose de apresentação' src={viviFigure} className='ViviApresenta' />
        </figure>
        
      </article>

      <div className='backgroundRight'></div>
      <div className='backgroundLeft'></div>
    </section>
  );
}