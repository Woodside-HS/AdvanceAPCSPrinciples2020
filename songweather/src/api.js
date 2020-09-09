import React from 'react';
import logo from './logo.svg';
import './App.css';

//This bit is for deciding what phrase/temp bracket it is. It returns an int corresponding to a specific lyric
function Api() {
  if((api>460) && (api<40)){
    return ( 1 ); //"And it's just like the ocean under the moon"
  }
  if((api>40) && (api<65)){
    return ( 2 ); //"But you stay so cool"
  }
  if((api>65) && (api<80)){
    return ( 3 ); //"Because you're so smooth"
  }
  if((api>80) && (api<95)){
    return ( 4 ); //"Man it's a hot one"
  }
  if((api>95) && (api<400)){
    return ( 5 ); //"Like seven inches from the midday sunz"
  }
}

export default Api;
