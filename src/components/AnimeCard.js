import React from 'react'

function AnimeCard({anime}) {
  return (
    <article className='anime-card'>
        <a href="">
            <figure>
                <img 
                    src={anime.media.coverImage.large}
                    alt="Anime Image" />
            </figure>
            <h3>{ anime.media.title.romaji }</h3>
        </a>
    </article>
  )
}

export default AnimeCard