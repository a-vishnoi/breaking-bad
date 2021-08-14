import React, {useState} from 'react';
import {getCharactersByName} from "../functions/characters";

const Search = (props) => {
	
	const {setCharacters} = props;
	
	const [keyword, setKeyword] = useState("");
	
	const titleCase = (str) => {
		let splitStr = str.toLowerCase().split(' ');
		for (let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
	}
	
	const handleSubmit = () => {
		
		const name = titleCase(keyword);
		//console.log(name);
		 getCharactersByName(name)
			 .then(response => setCharacters(response.data))
			 .catch(err => console.log(err));
		 setKeyword("");
	};
	
	
	
  return (
    <div>
	    <div className="input-group mb-3">
		    <input type="text" className="form-control" value={keyword} placeholder="Search"  onChange={(e) => setKeyword(e.target.value)}/>
		    <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" onClick={handleSubmit}>
			    Search
		    </button>
	    </div>
    </div>
  );
};

export default Search;