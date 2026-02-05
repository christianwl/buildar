import useControleDeTraducao from '@/shared/useControleDeTraducao';

import { TranslationTagsComPrefixo as TComTag } from '@/shared/TranslationTagsComPrefixo';

import bgFigure from './img/bg-figure.webp';

import './CommunitySection.css';

export default function CommunitySection() {

  const { chaveComPrefixo } = useControleDeTraducao("section7");

  return (
    <section className='frames' id="setimaTela">
      <article className='section7'>

        <figure>
          <img alt='Logo da Buildar' src={bgFigure} />
        </figure>

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

      </article>
    </section>
  );
}
