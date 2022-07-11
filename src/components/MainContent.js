import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

function MainContent(props) {
	
	const [ animes, updateAnimes ] = useState([])

	function handleOnDragEnd(result) {
		if (!result.destination) return;

		const items = Array.from(animes);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		updateAnimes(items);
	}

	useEffect(()=> {
		updateAnimes(props.animeList);
	}, [props.animeList])

	return (
		<main>
			<div className="main-head">
				<form
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input
						type="search"
						placeholder="Enter Anilist username..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)} />
				</form>
			</div>
			<DragDropContext onDragEnd={handleOnDragEnd}>
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
			</DragDropContext>
		</main>
	)
}

export default MainContent