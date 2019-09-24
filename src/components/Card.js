import React from 'react';

const Card = ( props ) => {
	return (
		<div className='tc f6 bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src= {`https://robohash.org/${props.id}?size=200x200`}/>
			<div className='light-green'>
				<h2>{ props.name }</h2>
				<p>{ props.email }</p>
				<p>{ props.username }</p>
			</div>
		</div>
	);
}

export default Card;
