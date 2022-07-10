import React from 'react'
import Draggable from 'react-draggable'
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function AnimeCard({anime}) {
  return (
    <Draggable>
    <article className='anime-card'>
            <figure>
                <img 
                    src={anime.media.coverImage.large}
                    alt="Anime Image" />
            </figure>
            <h3>{ anime.media.title.romaji }</h3>
    </article>
    </Draggable>
  )
}

export default AnimeCard