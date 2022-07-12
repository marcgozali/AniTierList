import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

function MainContent(props) {

	const [columns, setColumns] = useState({})

	const handleOnDragEnd = (result, columns, setColumns) => {
		if (!result.destination) return;
		const { source, destination } = result;

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[source.droppableId];
			const destColumn = columns[destination.droppableId];
			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);
			destItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...sourceColumn,
					items: sourceItems
				},
				[destination.droppableId]: {
					...destColumn,
					items: destItems
				}
			});
		} else {
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];
			const [removed] = copiedItems.splice(source.index, 1);
			copiedItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...column,
					items: copiedItems
				}
			});
		}
	};

	useEffect(() => {
		const temp = {
			S: {
				name: "s-tier",
				items: []
			},
			A: {
				name: "a-tier",
				items: []
			},
			B: {
				name: "b-tier",
				items: []
			},
			C: {
				name: "b-tier",
				items: []
			},
			D: {
				name: "b-tier",
				items: []
			},
			F: {
				name: "b-tier",
				items: []
			},
			Anilist: {
				name: "anilist",
				items: props.animeList
			}
		}
		setColumns(temp);
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
			<DragDropContext onDragEnd={result => handleOnDragEnd(result, columns, setColumns)}>
				{Object.entries(columns).map(([columnId, column], index) => {
					return (
						<Droppable droppableId={columnId} key={columnId} direction="horizontal">
							{(provided) => ([
								<div className='label'>
									<h3>{columnId}</h3>
								</div>,
								<div className='anime-list' {...provided.droppableProps} ref={provided.innerRef}>
									{column.items.map((anime, index) => {
										return (
											<AnimeCard anime={anime} index={index}></AnimeCard>
										)
									})}
									{provided.placeholder}
								</div>
							])}
						</Droppable>
					)
				})}
			</DragDropContext>
		</main>
	)
}

export default MainContent