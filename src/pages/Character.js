import React, {useState, useEffect} from 'react';
import {getCharactersById} from "../functions/characters";
import CharacterCard from "../components/CharacterCard";

const Character = (props) => {
	
	const [character, setCharacter] = useState(null);
	
	const {id} = props.match.params;
	
	useEffect(()=> {
		
		getCharactersById(id)
			.then(response => setCharacter(response.data[0]))
			.catch(err => console.log(err));
		
	}, [id]);
	
	
	
  return (
    <div className="mb-5">
	    {character && <CharacterCard character={character}/>}
    </div>
  );
};

export default Character;