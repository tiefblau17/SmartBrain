import React from 'react';
import './ImageLink.css';
const ImageLink=()=>{
	return( 
		<div>
			<p className='f3 white'>
		  		{'This magic brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-80 center' type='text' />
					<button className='w-20 grow f4 link bn ph3 pv2 dib white bg-gray'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLink;