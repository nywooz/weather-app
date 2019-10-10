import React, { Component } from "react";

import Skycons from "react-skycons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dotenv from "dotenv";
// const IPGeolocationAPI = require("ip-geolocation-api-javascript-sdk");

dotenv.config();
const GEOKEY = process.env.REACT_APP_GEO_LANDING_HOMEPAGE;

export const DateIco = () => <FontAwesomeIcon icon="calendar-day" />;
export const WindIco = () => <FontAwesomeIcon icon="wind" />;
export const Humidity = () => <FontAwesomeIcon icon="tint" />;

// "https://api.darksky.net/forecast/" + apikey + "/37.8267,-122.4233";

class WeatherApp extends Component {
  state = {
    temperatureMetric: "celcius",
    long: "",
    lat: "",
    timestamp: "",
    apikey: "8fcd54fe78bab4aaa7f8de732e8e9b78",
    msg: ""
  };

  componentDidMount() {
    this.getLocation();
    // this.getData()
  }

  getLocation() {
     fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=" + GEOKEY,
      {
        mode: "cors"
      }
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log("Request geolocation successful", data);
        this.getData(data);
      })
      .catch(function(error) {
        console.log("Request geolocation failed", error);
      });
  }

  getData(locationData) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/${this.state.apikey}/${position.coords.longitude},${position.coords.latitude}`;

        fetch(api, { mode: "cors" })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log("Request darksky successful", data);

            const {
              apparentTemperature,
              humidity,
              icon,
              summary,
              temperature,
              time,
              windSpeed
            } = data.currently;

            this.setState({
              city: locationData.city,
              country_name: locationData.country_name,
              timezone: data.timezone,
              long: position.coords.longitude,
              lat: position.coords.latitude,
              timestamp: position.timestamp,
              apparentTemperature: apparentTemperature,
              humidity: humidity,
              icon: icon,
              summary: summary,
              temperature: temperature,
              time: time,
              windSpeed: windSpeed
            });
          })
          .catch(function(error) {
            console.log("Request darksky failed", error);
          });
      });
    } else {
      this.setState({
        msg: "Sorry, your browser do not support geolocation"
      });
    }
  }

  setIcons(icon) {
    // CLEAR_DAY;
    // CLEAR_NIGHT;
    // PARTLY_CLOUDY_DAY;
    // PARTLY_CLOUDY_NIGHT;
    // CLOUDY;
    // RAIN;
    // SLEET;
    // SNOW;
    // WIND;
    // FOG;
    if (!icon) return "";
    return icon.replace(/-/g, "_").toUpperCase();
  }

  changeTempFarenCelcius(temperature) {
    if (isNaN(temperature)) return 0;
    let metric = "unknown";

    if (this.state.temperatureMetric === "celcius") {
      metric = Math.round((5 / 9) * (temperature - 32)) + " °C";
    } else {
      metric = Math.round((temperature * 9) / 5 + 32) + " °F";
    }
    return metric;
  }

  getFormattedDate(timestamp) {
    if (timestamp) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-GB", options);
    }
  }

  render() {
    const {
      timestamp,
      msg,
      temperature,
      apparentTemperature,
      humidity,
      icon,
      summary,
      windSpeed,
      country_name,
      city
    } = this.state;

    const convertedTemperature = this.changeTempFarenCelcius(temperature);
    const convertedApparentTemperature = this.changeTempFarenCelcius(
      apparentTemperature
    );
    const date = this.getFormattedDate(timestamp);

    return (
      <div className="App">
        <div className="App container-fluid m-0 p-2">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="content">
                {icon && (
                  <Skycons
                    color="white"
                    icon={this.setIcons(icon)}
                    autoplay={true}
                    height="200"
                    width="200"
                  />
                )}
              </div>
              <h5 className="text-center"> {convertedTemperature}</h5>
            </div>

            <div className="col-9">
              <h2> {city}</h2>
              <p> {country_name}</p>
              <p> {summary}</p>
            </div>
          </div>

          <div className="row pb-2">
            <div className="col-2">Feels</div>
            <div className="col"> {convertedApparentTemperature}</div>
          </div>

          <div className="row align-items-center pt-4">
            <div className="container-fluid">
              <div className="row pb-2">
                <div className="col-1">
                  <DateIco />
                </div>
                <div className="col-10"> {date}</div>
              </div>
              <div className="row pb-2">
                <div className="col-1">
                  <WindIco />
                </div>
                <div className="col-10"> {windSpeed}</div>
              </div>

              <div className="row pb-2">
                <div className="col-1">
                  <Humidity />
                </div>
                <div className="col"> {humidity}</div>
              </div>



              <div className="row pb-2">
                <div className="col-1"></div>
                <div className="col"> {msg}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherApp;
