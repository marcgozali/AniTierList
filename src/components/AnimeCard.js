import React from 'react'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

function AnimeCard({ anime },{ index }) {
	return (
		<Draggable key={anime.media.title.romaji} draggableId={anime.media.title.romaji} index={index}>
			{(provided) => (
				<article className='anime-card' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					<figure>
						<img
							src={anime.media.coverImage.large}
							alt="Anime Image" />
					</figure>
					<h3>{anime.media.title.romaji}</h3>
				</article>
			)}

		</Draggable>
	)
}

export default AnimeCard