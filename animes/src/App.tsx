import { useEffect, useState } from 'react';
import { AnimeInfo } from './components/AnimeInfo';
import { ListaAnime } from "./components/ListaAnime";
import { AddMyLista } from "./components/AddMyLista";

function App() {

  const [pesquisa, setPesquisa] = useState('Naruto');
  const [dadosAnime, setDadosAnime] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [minhaLista, setMinhaLista] = useState([]);

  const addA=(anime)=>{
    const newArray = [...minhaLista, anime]
    setMinhaLista(newArray);
  }

  const getData = async () => {
    const resp = await fetch(`https://api.jikan.moe/v4/anime?q=${pesquisa}&limit=21`);
    const respData = await resp.json();
    setDadosAnime(respData.data);
  }

  useEffect(() => {
    getData();
  }, [pesquisa]);

  return (
    <>
      <div className="cabecalho">
        <h1>Minha Lista de Animes</h1>
        <div className="pesquisa">
          <input type="search" placeholder='Buscar...'
            onChange={(e) => setPesquisa(e.target.value)} />
        </div>
      </div>

      <div className="container">
        <div className="animeinfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="fila-anime">
          <h2 className="titulo">Animes</h2>
          <div className="fila">
            <ListaAnime listaanime={dadosAnime}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddMyLista}
              naLista={(anime)=>addA(anime)}
            />
          </div>
          <h2 className="titulo">Minha lista</h2>
          <div className="fila">
            <ListaAnime 
              listaanime={minhaLista}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddMyLista}
              naLista={(anime)=>addA(anime)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
