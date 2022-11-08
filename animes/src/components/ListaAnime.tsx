import React from 'react'


//componente que fica a lista com os animes.
export const ListaAnime = ({ listaanime, setAnimeInfo, animeComponent, naLista}) => {
    const AddALista = animeComponent;
    return (
        <>
            {
                listaanime ? (
                    listaanime.map((anime, index) => {
                        return (
                            <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
                                <img src={anime.images.jpg.large_image_url} alt="imagemAnime" />
                                <div className="anime-info">
                                    <h4>{anime.title}</h4>
                                    <div className="por-cima" onClick={()=>naLista(anime)}>
                                        <h4>{anime.title_japanese}</h4>
                                        <h3>SINOPSES</h3>
                                        <div className="sinopses">
                                            <p>{anime.synopsis}</p>
                                        </div>
                                        <AddALista/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : "Não Encontrado!"
            }

        </>
    )
}
