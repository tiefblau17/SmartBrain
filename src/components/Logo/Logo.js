import React from 'react';
import Tilt from 'react-tilt'
 

const Logo=()=>{
	return( 
		<div className=' ma4 mt0 center'>
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 210, width: 300 }} >
 				<div className="Tilt-inner"> 
 					<img src="Brain1.png"  alt="brain" />
 				</div>
 			</Tilt>
		</div>
	);
}

export default Logo;