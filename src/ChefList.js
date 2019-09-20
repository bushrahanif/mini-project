import React from 'react';
//import ReactDOM from 'react-dom';

const ChefList = (props) => {

	return (
			<div className="secdiv ma4 dib pa4 grow shadow-4">

			   	<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='chef'/>
			   	<h1 className='tc'>{props.name}</h1>
			   	<p className='tc'>{props.work}</p>

			</div>

	       )
}

export default ChefList;