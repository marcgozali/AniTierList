import React from 'react'
import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function MainContent(props) {

	const [items, setItems] = useState([])
	
	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
	  
		return result;
	};

	const grid = 8;
	const getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: 'none',
		padding: grid * 2,
		margin: `0 ${grid}px 0 0`,
	  
		// change background colour if dragging
		background: isDragging ? 'lightgreen' : 'grey',
	  
		// styles we need to apply on draggables
		...draggableStyle,
	  });
	
	  const getListStyle = isDraggingOver => ({
		background: isDraggingOver ? 'lightblue' : 'lightgrey',
		display: 'flex',
		padding: grid,
		overflow: 'auto',
	  });

	  function onDragEnd(result) {
		if (!result.destination) {
			return;
		}
		const newItems = [...items];
		const [removed] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, removed);
		setItems(newItems)
	}

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
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId='droppable' direction='horizontal'>
					{(provided, snapshot)=> (
						<div ref={provided.innerRef}
              				style={getListStyle(snapshot.isDraggingOver)}
              				{...provided.droppableProps} >
								{props.animeList.map((anime, index) => (
									<Draggable>
										{(provided, snapshot) => (
											<div ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)} >
												{anime.media.title.romaji}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
						</div>
					)
					}
				</Droppable>

			</DragDropContext>

		</main>
	)
}

export default MainContent