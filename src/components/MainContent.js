import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props) {
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
			<div className='anime-list'>

			</div>
		</main>
	)
}

export default MainContent