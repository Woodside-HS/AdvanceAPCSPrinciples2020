import React from 'react';
import logo from './logo.svg';
import './App.css';

window.onload = init;
const API_KEY = "f0bd126297ec17be3cf7cfdad1b91dd3";

function init(){
}

function convertTemp(kelvin){
  const celsius = kelvin - 273;
  //Convert celsius to Fahrenheit
  let fahrenheit = celsius * (9/5) + 32;
  //Rounding down fahrenheit
  return Math.floor(fahrenheit);
}

async function getWeather(city, country) {
  const API_CALL = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Woodside,${country}&appid=25ad0e0534462dd113e125e3e8106a1f')
  console.log(API_CALL)
  const data = await (API_CALL.json())
  const currentTemp = data.main.temp;
  return convertTemp(currentTemp);
}

//This bit is for deciding what phrase/temp bracket it is in Fahrenheit. It returns a specific lyric
export const Quote = async (city, country) => {
  const api = await getWeather(city, country)
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

