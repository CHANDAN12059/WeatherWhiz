import Search from "./search";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./weatherApp.css";


function WeatherApp(){

let[info,setInfo]=useState({
        city:"delhi",
        temp:32.05,
        tempMin:32.05,
        tempMax:32.05,
        humidity:39,
        feelsLike:"haze",
        weather:"mist", });


 function updateInfo(data){
    setInfo(data);
 }       


return(
<div className="weather-app">

<Search updateInfo={updateInfo}/>
<br></br>
<InfoBox info={info}/>


</div>


)

}


export default WeatherApp;