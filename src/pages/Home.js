import React, {useState, useEffect} from 'react';
import {getAllCharacters, getAllCharactersByPage} from "../functions/characters";
import CharacterInList from '../components/CharacterInList';
import Filters from "../components/Filters";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Home = () => {
	
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	
	const handlePageClick = (e) => {
		setCurrentPage(e.target.value);
	};
	
	useEffect(() => {
		getAllCharacters()
			.then(response => {
				setTotalPages(~~(response.data.length/10) + 1);
			})
			.catch(error => console.log(error));
	}, []);
	
	useEffect(() =>{
		
		const offset = (currentPage - 1) * 10;
		
		getAllCharactersByPage(offset)
			.then(res => {
				setCharacters(res.data);
				
			})
			.catch(err => console.error(err));

		// console.log(characters);
		// console.log(totalPages);
	}, [currentPage]);
	
  return (
    <div className="container">
	    <div className="d-flex justify-content-between">
				<div className="row">
			    <Search setCharacters={setCharacters} />
				</div>
		    <div className="row">
			    <Filters setCharacters={setCharacters} />
		    </div>
	    </div>
	    <div className="list-group">
		    {
			    characters.map(character => <CharacterInList character={character} />)
		    }
	    </div>
	
	    <div className="d-flex justify-content-center">
		    <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
	    </div>
	    
    </div>
  );
};

export default Home;