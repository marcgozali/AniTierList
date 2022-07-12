import React from 'react'

function Tiers(props) {
	return (
		<Droppable droppableId='animes' direction="horizontal">
					{(provided) => (
						<div className='anime-list' {...provided.droppableProps} ref={provided.innerRef}>
							{animes.map((anime, index) => {
								return (
									<AnimeCard anime={anime} index={index}></AnimeCard>
								)
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
	)
}

export default Tiers