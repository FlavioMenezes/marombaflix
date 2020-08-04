import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function Pagina404(){
  return (
    <div>
      Página 404
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>

  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    {/* <Route component={ () => (<div>404</div>)} />  SO UM TESTE BOY*/}
    <Route component={Pagina404} /> {/*Se apagar o path o ultimo sera carregado se nao achar rota*/}
  </Switch>

  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
