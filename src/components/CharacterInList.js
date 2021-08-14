import React from 'react';

import {Link} from 'react-router-dom';

const CharacterInList = ({character}) => {
	
	const {name, occupation, birthday, status, char_id} = character;
	
  return (
    <Link to={`/character/${char_id}`} className="list-group-item list-group-item-action" >
	    <div className="d-flex w-100 justify-content-between">
		    <h5 className="mb-1 text-dark"><strong>{name}</strong></h5>
		    <small>Birthday: {birthday}</small>
	    </div>
	    <p className="mb-1">
		    Occupation: {occupation.join(", ")}
	    </p>
	    <small className={status === 'Deceased' ? `text-danger` : `text-success`} >Status: {status}</small>
    </Link>
  );
};

export default CharacterInList;