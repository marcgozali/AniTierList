import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState, useEffect } from 'react';
function App() {
	const [ animeList, SetAnimeList ] = useState([]);
	const [ topAnime, SetTopAnime ] = useState([]);
	const [ search, SetSearch ] = useState("");

	const GetUserlist = async () => {
		const settings = {
			method: 'GET',
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Origin, Methods, Content-Type",
				'X-MAL-CLIENT-ID': ''
			}
		}
		const temp = await fetch(
			`https://api.myanimelist.net/v2/users/Arcanis33/animelist`, settings)
			.then( res => res.json());
		console.log(temp);
		SetTopAnime(temp);
	}

	useEffect(() => {
		GetUserlist();
		console.log("topAnime");
		console.log(topAnime);
	}, [])

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent />
			</div>
		</div>
	);
}

export default App;
