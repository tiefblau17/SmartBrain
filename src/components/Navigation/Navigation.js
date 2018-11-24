import React from 'react';

const Navigation=({onRouteChange,isSignedIn})=>{
	if(isSignedIn){
		return( 
		<nav style={{display: 'flex', justifyContent: 'flex-end', height:30}}>
			<p onClick={()=>onRouteChange('signout')} className='f4 link dim dark-gray pas pointer pa3'>Sign out</p>
		</nav>
		);
	}
	else{
		return( 
		<nav style={{display: 'flex', justifyContent: 'flex-end', height:30}}>
			<p onClick={()=>onRouteChange('signin')} className='f4 link dim dark-gray pas pointer pa3'>Sign in</p>
			<p onClick={()=>onRouteChange('register')} className='f4 link dim dark-gray pas pointer pa3'>Register</p>
		</nav>
		);
	}
}

export default Navigation;