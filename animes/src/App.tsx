import { useEffect, useState } from 'react'

function App() {
  
  const [pesquisa, setPesquisa] = useState('Naruto');
  const [dadosAnime, setDadosAnime] = useState();

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
          onChange={(e)=>setPesquisa(e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default App
