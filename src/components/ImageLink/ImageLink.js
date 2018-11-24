import React from 'react';
import './ImageLink.css';
const ImageLink=({onInputchange, onButtonsubmit})=>{
	return( 
		<div>
			<p className='f4 white'>
		  		{'This magic brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form center pa3 br3 shadow-5'>
					<input className='f4 pa2 w-80 center' type='text' onChange={onInputchange}/>
					<button className='w-20 grow f4 link bn ph3 pv2 dib white bg-gray'
							onClick={onButtonsubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLink;