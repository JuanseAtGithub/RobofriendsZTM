import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return(
		<div>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='searchrobot'
				onChange={searchChange}
			/>
		</div>
	); 
}

export default Searchbox;