import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain/';
import Caurosel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={ {background:"#141414"} }>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Conhecimento e informações reunidos em um só lugar!"}
      />

      <Caurosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Caurosel
        category={dadosIniciais.categorias[1]}
      />

      <Caurosel
        category={dadosIniciais.categorias[2]}
      />

      <Caurosel
        category={dadosIniciais.categorias[3]}
      />

      <Caurosel
        category={dadosIniciais.categorias[4]}
      />

      <Caurosel
        category={dadosIniciais.categorias[5]}
      />

      <Caurosel 
        category={dadosIniciais.categorias[6]}
      />

      <Footer />
    </div>
  );
}

export default Home;
