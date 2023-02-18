import React, { useEffect, useState } from "react";
import "./css/Style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);


  useEffect(() => {
    const fetchApi = async () => {
      const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d95de3569e1ff534875b2f1d77e889aa`;

      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  },[search] )

  return (
        <>
      <div className="box">
        <div className="inputData">
          <input type="search" value={search} className="inputField" onChange={ (event) => { setSearch(event.target.value) }} />
          </div>
          { !city ? (
              <p className="errorMsg"> no data found </p>
            ) : ( 
            <div>
              <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">  {city.temp} °C </h1>
            <h3 className="tempmin_max"> Min: {city.temp} °C | Max : {city.temp} °C </h3>
          </div>
        
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div> 
        ) 
        }
      </div>
    </>
  )
}
export default Tempapp;
