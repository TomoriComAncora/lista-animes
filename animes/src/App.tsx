import { useEffect, useState } from 'react';
import { AnimeInfo } from './components/AnimeInfo';
import { ListaAnime } from "./components/ListaAnime";
import { AddMyLista } from "./components/AddMyLista";
import { RemoveDaLista } from './components/RemoveDaLista';
import {BiSearchAlt2} from 'react-icons/bi';

function App() {

  const [pesquisa, setPesquisa] = useState('');
  const [dadosAnime, setDadosAnime] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [minhaLista, setMinhaLista] = useState([]);

  //função para adicionar
  const addA = (anime) => {
    const index = minhaLista.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id
    })
    if (index < 0) {
      const newArray = [...minhaLista, anime]
      setMinhaLista(newArray);
    }
  }

  //função para remover
  const removeDa = (anime) => {
    const newArray = minhaLista.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id
    })
    setMinhaLista(newArray);
  }

  //usada para pegar os dados
  const getData = async () => {
    const resp = await fetch(`https://api.jikan.moe/v4/anime?q=${pesquisa}&limit=24`);
    const respData = await resp.json();
    setDadosAnime(respData.data);
  }

  useEffect(() => {
    getData();
  }, [pesquisa]);

  return (
    <>
    {/* barra de pesquisa */}
      <div className="cabecalho">
        <h1>Minha Lista de Animes</h1>
        <div className="pesquisa">
          <input type="search" placeholder='Buscar...'
            onChange={(e) => setPesquisa(e.target.value)} />
          <div className="icon"><BiSearchAlt2/></div>
        </div>
      </div>

    {/* onde aparece as informações e uma miniatura da foto do anime */}
      <div className="container">
        <div className="animeinfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="fila-anime">
          <h2 className="titulo">Animes</h2>
          <div className="fila">
            {/* adicionando na "minha lista" */}
            <ListaAnime 
              listaanime={dadosAnime}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddMyLista}
              naLista={(anime) => addA(anime)}
            />
          </div>

          <hr color='#f47521'/><hr color='#f47521'/>
          <h2 className="titulo">Minha lista</h2>
          <div className="fila">
            {/* removendo da "minha lista" */}
            <ListaAnime
              listaanime={minhaLista}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveDaLista}
              naLista={(anime) => removeDa(anime)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
