import React from 'react';
import logo from './logo.svg';
import './App.css';

window.onload = init;

function init(){
  Quote(65);
}
//This bit is for deciding what phrase/temp bracket it is in Fahrenheit. It returns a specific lyric
function Quote(api) {
  if((api>460) && (api<40)){
    return ( "And it's just like the ocean under the moon" ); //For between -460 and 40
  }
  if((api>40) && (api<65)){
    return ( "But you stay so cool" ); //For between 40 and 65
  }
  if((api>65) && (api<80)){
    return ( "Because you're so smooth" ); //For between 65 and 80
  }
  if((api>80) && (api<95)){
    return ( "Man it's a hot one" ); //For between 80 and 95
  }
  if((api>95) && (api<400)){
    return ( "Like seven inches from the midday sun" ); //For between 95 and 400
  }
}

export default Api;
