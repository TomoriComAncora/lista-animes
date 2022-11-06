import React from 'react'

export const ListaAnime = ({ listaanime }) => {
    return (
        <>
            {
                listaanime ? (
                    listaanime.map((anime, index) => {
                        return (
                            <div className="card">
                                <img src={anime.images.jpg.large_image_url} alt="imagemAnime" />
                                <div className="anime-info">
                                    <h4>{anime.title}</h4>
                                </div>
                            </div>
                        )
                    })
                ) : "Não Encontrado!"
            }

        </>
    )
}
