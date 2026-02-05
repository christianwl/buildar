/* imports dos componentes funcionais da biblioteca React-Router-Dom 
usado para definir rotas de navegação entre páginas*/
//
// - BrowserRouter: Envolve a aplicação inteira e fornece o contexto para o roteamento.
// - Routes: Contém um conjunto de rotas definidas para a aplicação.
// - Route: Define uma rota individual, especificando o caminho (path) e o componente a ser renderizado
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imports dos components funcionais das páginas
//---------------------------------------------------------------|

// Components acessiveis da landingPage
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/entrada/Login/Login";
import Cadastro from "../pages/entrada/Cadastro/Cadastro";
import SobreNos from "../pages/sobre/SobreNos";
import FaleConosco from "../pages/faleConosco/FaleConosco";
import Termos from "../pages/termos/Termos";

// Components acessiveis do Home
import Home from "../pages/home/Home";
import Corredor from "../pages/corredor/Corredor";
import Pratica from "../pages/conteudo/Pratica";
import Conteudos from "../pages/conteudo/Conteudos";
import Conteudo6 from "../pages/conteudo/Conteudo6";
import Conteudo7 from "../pages/conteudo/Conteudo7";

// Components acessiveis de Conexoes
import Conexoes from "../pages/conexoes/Conexoes";
import Voluntario from "../pages/inscricaoVoluntario/Voluntario";

// Components acessiveis da Loja
import Loja from "../pages/loja/Loja";
import Pagamento from "../pages/pagamento/Pagamento";

// Componente do Perfil
import Perfil from "../pages/perfil/Perfil";

// Components acessiveis da Area de Descanso
import AreaDescanso from "../pages/areaDescanso/AreaDescanso";
import GameDescanso from "../GameDescanso";
import InicioQuiz from "../pages/quiz/InicioQuiz";
import Quiz from "../pages/quiz/Quiz1";
import Quiz2 from "../pages/quiz/Quiz2";

//---------------------------------------------------------------|

export default function Rotas() {
  const propriedadesRotas = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "cadastro",
      element: <Cadastro />,
    },
    {
      path: "sobre",
      element: <SobreNos />,
    },
    {
      path: "faleConosco",
      element: <FaleConosco />,
    },
    {
      path: "termos",
      element: <Termos />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "corredor/:mapaNome",
      element: <Corredor />,
    },
    {
      path: "pratica",
      element: <Pratica />,
    },
    {
      path: "conteudo6",
      element: <Conteudo6 />,
    },
    {
      path: "conteudos/:miniGame/conteudo6",
      element: <Conteudo6 />,
    },
    {
      path: "conteudos/:miniGame/conteudo7",
      element: <Conteudo7 />,
    },
    {
      path: "conteudos/:indice",
      element: <Conteudos />,
    },
    {
      path: "conexoes",
      element: <Conexoes />,
    },
    {
      path: "inscricaoVoluntario",
      element: <Voluntario />,
    },
    {
      path: "loja",
      element: <Loja />,
    },
    {
      path: "pagamento",
      element: <Pagamento />,
    },
    {
      path: "perfil",
      element: <Perfil />,
    },
    {
      path: "game_descanso",
      element: <GameDescanso />,
    },
    {
      path: "descanso",
      element: <AreaDescanso />,
    },
    {
      path: "quiz",
      element: <InicioQuiz />,
    },
    {
      path: "quiz1",
      element: <Quiz />,
    },
    {
      path: "quiz2",
      element: <Quiz2 />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {propriedadesRotas.map((propriedade) => {
          return <Route key={propriedade.path} {...propriedade} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
