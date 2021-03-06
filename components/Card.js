import React from 'react';


const Card = (props) => {
	return(
		<div className='bg-light-purple dib br3 pa3 ma3 grow bw2 shadow-5' >
			<img alt='robots'  src={`https://robohash.org/${props.id}?set=set4 `} />
			<div>
				<h2> {props.name} </h2>  
				<p> {props.email} </p>
			</div>
		</div>
	);

}

export default Card;