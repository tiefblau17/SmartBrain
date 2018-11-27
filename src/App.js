import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';
import FaceDetect from './components/FaceDetect/FaceDetect';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '3f0a640f19344b628dee128644729e36'
});

const particleoptions = {
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
       "onclick": {
        "enable": true,
        "mode": "bubble"
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn: false,
      user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''
      }
    }
  }

loadUser=(data)=>{ 
  this.setState({user:{
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined:data.joined
  }})
}


calculateFace=(data)=>{
  const face=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById('inputimage');
  const width=Number(image.width);
  const height=Number(image.height);
  return{
    leftCol:face.left_col*width,
    topRow:face.top_row*height,
    rightCol:width-(face.right_col*width),
    bottomRow: height-(face.bottom_row*height)
  }
}

displayFaceBox=(box)=>{
  this.setState({box:box});
}

onInputchange=(event)=>{
  this.setState({input:event.target.value});
}

onButtonsubmit=()=>{
  this.setState({imageUrl:this.state.input})
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response =>{
      this.displayFaceBox(this.calculateFace(response))
      if(response){
        fetch('http://localhost:3001/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:this.state.user.id
          })
        }).then(response=>response.json())
          .then(count=>{
            this.setState(Object.assign(this.state.user,{entries:count}))
          })
      }
      
    })
    .catch(err=>console.log(err));
}

onRouteChange=(route)=>{
  if(route==='signout'){
    this.setState({isSignedIn:false})
  }
  else if(route==='home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route});
}

  render() {
    const {isSignedIn,imageUrl,route,box}=this.state;
    return (
      <div className="App">
        <Particles className='particles'
                params={particleoptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route==='home'
        ?<div>
        <Logo />
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLink className='ImageLink'
                    onInputchange={this.onInputchange} 
                    onButtonsubmit={this.onButtonsubmit}/> 
        <FaceDetect box={box} imageUrl={imageUrl}/>
        </div>
        :(
          route==='signin'
           ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
           :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
       
        }
      </div>
    );
  }
}

export default App;
