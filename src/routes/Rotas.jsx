/* imports dos componentes funcionais da biblioteca React-Router-Dom 
usado para definir rotas de navegação entre páginas*/
//
// - BrowserRouter: Envolve a aplicação inteira e fornece o contexto para o roteamento.
// - Routes: Contém um conjunto de rotas definidas para a aplicação.
// - Route: Define uma rota individual, especificando o caminho (path) e o componente a ser renderizado
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Imports dos components funcionais das páginas
//---------------------------------------------------------------|

// Components acessiveis da landingPage
import LandingPage from '../pages/landingPage/LandingPage.jsx';
import Login from '../pages/entrada/Login.jsx';
import Cadastro from '../pages/entrada/Cadastro.jsx';
import SobreNos from '../pages/sobre/SobreNos.jsx';
import FaleConosco from '../pages/faleConosco/FaleConosco.jsx';
import Termos from '../pages/termos/Termos.jsx';

// Components acessiveis do Home
import Home from '../pages/home/Home.jsx';
import Corredor from '../pages/corredor/Corredor.jsx';
import Pratica from '../pages/conteudo/Pratica.jsx';
import Conteudos from '../pages/conteudo/Conteudos.jsx';
import Conteudo6 from '../pages/conteudo/Conteudo6.jsx';
import Conteudo7 from '../pages/conteudo/Conteudo7.jsx';

// Components acessiveis de Conexoes
import Conexoes from '../pages/conexoes/Conexoes.jsx';
import Voluntario from '../pages/inscricaoVoluntario/Voluntario.jsx';

// Components acessiveis da Loja
import Loja from '../pages/loja/Loja.jsx';
import Pagamento from '../pages/pagamento/Pagamento.jsx';

// Componente do Perfil
import Perfil from '../pages/perfil/Perfil.jsx';

// Components acessiveis da Area de Descanso
import AreaDescanso from '../pages/areaDescanso/AreaDescanso.jsx';
import GameDescanso from '../GameDescanso';
import InicioQuiz from '../pages/quiz/InicioQuiz.jsx'
import Quiz from '../pages/quiz/Quiz1.jsx';
import Quiz2 from '../pages/quiz/Quiz2.jsx';

//---------------------------------------------------------------|

export default function Rotas() {

    const propriedadesRotas = [
        {
            path: "/",
            element: < LandingPage />
        },
        {
            path: "login",
            element: < Login />
        },
        {
            path: "cadastro",
            element: < Cadastro />
        },
        {
            path: "sobre",
            element: < SobreNos />
        },
        {
            path: "faleConosco",
            element: < FaleConosco />
        },
        {
            path: "termos",
            element: < Termos />
        },
        {
            path: "home",
            element: < Home />
        },
        {
            path: "corredor/:mapaNome",
            element: < Corredor />
        },
        {
            path: "pratica",
            element: < Pratica />
        },
        {
            path: "conteudo6",
            element: < Conteudo6 />
        },
        {
            path: "conteudos/:miniGame/conteudo6",
            element: < Conteudo6 />
        },
        {
            path: "conteudos/:miniGame/conteudo7",
            element: < Conteudo7 />
        },
        {
            path: "conteudos/:indice",
            element: < Conteudos />
        },
        {
            path: "conexoes",
            element: < Conexoes />
        },
        {
            path: "inscricaoVoluntario",
            element: < Voluntario />
        },
        {
            path: "loja",
            element: < Loja />
        },
        {
            path: "pagamento",
            element: < Pagamento />
        },
        {
            path: "perfil",
            element: < Perfil />
        },
        {
            path: "game_descanso",
            element: < GameDescanso />
        },
        {
            path: "descanso",
            element: < AreaDescanso />
        },
        {
            path: "quiz",
            element: < InicioQuiz />
        },
        {
            path: "quiz1",
            element: < Quiz />
        },
        {
            path: "quiz2",
            element: < Quiz2 />
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {propriedadesRotas.map((propriedade) => {
                    return <Route key={propriedade.path} {...propriedade} />
                })}
            </Routes>
        </BrowserRouter>
    );

}