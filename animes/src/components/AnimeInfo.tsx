import React from 'react'

//componentes que tem e mostra as informações do anime
export const AnimeInfo = (props) => {
    const {title, images:{jpg:{large_image_url}}, source, rank, score, popularity, members, status, rating, duration} = props.animeInfo;
  return (
    <>
        <div className="visivel">
        <div className="anime-contido">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>#Classificação: {rank}</h3>
                <h3>#Pontuação: {score}</h3>
                <h3>#Popularidade: {popularity}</h3><hr/><br />
                <h4>Membros: {members}</h4>
                <h4>Fonte: {source}</h4>
                <h4>Duração: {duration}</h4>
                <h4>Status: {status}</h4>
                <h4>Avaliação: {rating}</h4>
            </div>
        </div>
        </div>
    </>
  )
}
