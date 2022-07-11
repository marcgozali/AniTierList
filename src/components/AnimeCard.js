import React from 'react'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

function AnimeCard(props) {
	return (
		<Draggable key={props.anime.media.title.romaji} draggableId={props.anime.media.title.romaji} index={props.index}>
			{(provided) => (
				<article className='anime-card' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					<figure>
						<img
							src={props.anime.media.coverImage.large}
							alt="Anime Image" />
					</figure>
					<h3>{props.anime.media.title.romaji}</h3>
				</article>
			)}
		</Draggable>
	)
}

export default AnimeCard