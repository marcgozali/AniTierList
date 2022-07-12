import React from 'react'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

function AnimeCard(props) {
	return (
		<Draggable key={props.anime.media.title.romaji} draggableId={props.anime.media.title.romaji} index={props.index}>
			{(provided) => (
				<article className='anime-card tooltip' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					<figure>
						<img
							src={props.anime.media.coverImage.large}
							alt="Anime Image" />
					</figure>
					{ <p className='tooltiptext'>{props.anime.media.title.romaji}</p>}
				</article>
			)}
		</Draggable>
	)
}

export default AnimeCard