import React, { useEffect, useState } from "react";
import "./Compo.css";
const Compo = () => {
  const [city, setCity] = useState();
  const [search, setsearch] = useState("Dehradun");
  useEffect(() => {
    const fetchapi = async () => {
      const res = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=be7eb309385b87a7be003363637c7a18`);
      const datares = await res.json();

      setCity(datares.main);
    };
    fetchapi();
  }, [search]);
  return (
    <>
      <div className="main">
        <h1>Weather Report</h1>
        <div className="card">
          <div className="search">
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setsearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="error">No Data found</p>
          ) : (
            <>
              <div className="maintemp">
                <p>{city.temp} F</p>
              </div>
              <div className="location">{search}</div>
              <div className="range">
                <div className="max">
                  <p className="maxtemp">{city.temp_max}F</p>
                  <h4>Max Temp</h4>
                </div>
                <div className="min">
                  <p className="mintemp">{city.temp_min}F</p> <h4>Min Temp</h4>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Compo;
