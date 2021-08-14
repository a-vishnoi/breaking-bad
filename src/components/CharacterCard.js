import React, {useState, useEffect} from 'react';
import {getQuoteByCharacterName} from "../functions/characters";

const CharacterCard = ({character}) => {
	
	const [quotes, setQuotes] = useState([]);
	
	const {name, img, occupation, birthday, status, nickname, portrayed, appearance} = character;
	
	useEffect(() => {
		getQuoteByCharacterName(name)
			.then(response => setQuotes(response.data))
			.catch(error => console.log(error))
	}, []);
	
	console.log(quotes);
	
  return (
	  <div className="row">
		  <div className="col-md-2"></div>
		  <div className="col-md-8">
			  <div className="card">
				  <div className="bg-image d-flex justify-content-center">
					  <img
						  src={img}
						  className="img-fluid"
					  />
				  </div>
				  <div className="card-body">
					  <h3 className="card-title text-center"><strong>{name}</strong></h3>
					  
					  {birthday !== 'Unknown' && <h6 className="d-flex justify-content-between">
						  <span>Birthday</span>
						  <span>{birthday}</span>
					  </h6>}
					
					  {status && <h6 className="d-flex justify-content-between">
						  <span>Status</span>
						  <span>{status}</span>
					  </h6>}
					
					  {
					  	nickname && <h6 className="d-flex justify-content-between">
							  <span>Nickname</span>
							  <span>{nickname}</span>
					    </h6>
					  }
					
					  {portrayed && <h6 className="d-flex justify-content-between">
						  <span>Portrayed</span>
						  <span>{portrayed}</span>
					  </h6>}
					
					  {appearance.length > 0 && <h6 className="d-flex justify-content-between">
						  <span>Appearance</span>
						  <span>{appearance.join(", ")}</span>
					  </h6>}
					
					  {occupation.length > 0 && <h6 className="d-flex justify-content-between">
						  <span>Occupation</span>
						  <span>{occupation.join(", ")}</span>
					  </h6>}
					
					  <hr />
					  
					  {
					  	quotes.length > 0 && (<h6>
							  <h5 className="mb-1 mt-1 text-center">Quotes</h5>
							  <br />
							  <div>{
								  quotes.map(quote => <div className="card">
									  <div className="card-body rounded mb-1" style={{padding:'0.5rem', backgroundColor:'rgba(0,0,0,0.04)'}}>{quote.quote}</div>
								  </div>)
							  }</div>
						  </h6>)
					  }
				
				  </div>
			  </div>
		  </div>
		  <div className="col-md-2"></div>
	  </div>
  );
};

export default CharacterCard;