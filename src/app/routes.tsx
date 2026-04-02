import { createBrowserRouter } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Experiencia from './pages/Experiencia';
import Projetos from './pages/Projetos';
import Projeto from './pages/Projeto';
import Certificados from './pages/Certificados';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'sobre', Component: Sobre },
      { path: 'experiencia', Component: Experiencia },
      { path: 'projetos', Component: Projetos },
      { path: 'projeto/:id', Component: Projeto },
      { path: 'certificados', Component: Certificados },
      { path: 'contato', Component: Contato },
      { path: '*', Component: NotFound },
    ],
  },
]);