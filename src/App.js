import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';

function App() {
	const [ animeList, SetAnimeList ] = useState([]);
	const [ topAnime, SetTopAnime ] = useState([]);
	const [ search, SetSearch ] = useState("");

	const GetTopAnime = async () => {
		
	}

	function handleResponse(response) {
		return response.json().then(function (json) {
			return response.ok ? json : Promise.reject(json);
		});
	}
	
	function handleData(data) {
		console.log("data");
		console.log(data.data.Page.mediaList);
		SetAnimeList(data.data.Page.mediaList);
	}
	
	function handleError(error) {
		alert('Error, check console');
		console.error(error);
	}

	const HandleSearch = e => {
		e.preventDefault();
		FetchAnime(search);
	}

	const FetchAnime = async (q) => {
		var query = `
		query ($userId: String, $page: Int, $perPage: Int) {
			Page(page: $page, perPage: $perPage) {
				pageInfo {
					total
					currentPage
					lastPage
					hasNextPage
					perPage
				}
			  mediaList(userName: $userId, type: ANIME) {
				id
				media {
				  title {
					romaji
					english
				  }
				  coverImage {
					large
				  }
				}
			  }
			}
		  }
		  
		`;

		var variables = {
			userId: q,
			page: 1,
			perPage: 10
		};
		
		var url = 'https://graphql.anilist.co',
			options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					query: query,
					variables: variables
				})
			};
		
		await fetch(url, options)
			.then(handleResponse)
			.then(handleData)
			.catch(handleError);
	}

	useEffect(() => {
		GetTopAnime();
		//console.log("topAnime");
	}, [])

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent 
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
		</div>
	);
}

export default App;
