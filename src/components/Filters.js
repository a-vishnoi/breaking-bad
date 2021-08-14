import React, {useState} from 'react';
import {getCharactersByCategory} from "../functions/characters";


const Filters = (props) => {
	
	const {setCharacters} = props;
	
	const [category1, setCategory1] = useState(false);
	const [category2, setCategory2] = useState(false);
	
	
	const handleChange = (e) => {
		if(e.target.name === "breaking-bad"){
			setCategory2(false);
			setCategory1(true);
			getCharactersByCategory("Breaking Bad")
				.then(response => setCharacters(response.data))
				.catch(err => console.log(err));
			
			// setCategory1(false);
		}
		else{
			setCategory1(false);
			setCategory2(true);
			getCharactersByCategory("Better Call Saul")
				.then(response => setCharacters(response.data))
				.catch(err => console.log(err));
			
			// setCategory2(false);
		}
	};
	
	
  return (
	  <div>
		  <div>
			  <i className="fas fa-filter"></i>
			  <span>Filter</span>
		  </div>
		  <form>
			  <input type="radio" name="breaking-bad" checked={category1} onChange={handleChange}/>
			  <label htmlFor="breaking-bad"><div className="ml-5">Breaking Bad</div></label>
			  <br />
			  <input type="radio" name="better-call-saul" checked={category2} onChange={handleChange}/>
			  <label htmlFor="better-call-saul">Better Call Saul</label>
			  <br/>
		  </form>
	  </div>
  );
};

export default Filters;