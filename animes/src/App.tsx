import { useEffect, useState } from 'react'

function App() {
 
  const [dadosAnime, setDadosAnime] = useState();

  const getData = async() =>{
    const resp = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=21`);
    const respData = await resp.json();
    setDadosAnime(respData.data);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <>
      
    </>
  )
}

export default App
