import React, { Component } from "react";

import Skycons from "react-skycons";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// "https://api.darksky.net/forecast/" + apikey + "/37.8267,-122.4233";

class App extends Component {
  state = {
    temperatureMetric: "celcius",
    long: "",
    lat: "",
    timestamp: "",
    apikey: "8fcd54fe78bab4aaa7f8de732e8e9b78",
    msg: ""
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/${this.state.apikey}/${position.coords.longitude},${position.coords.latitude}`;

        fetch(api)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);

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
      timezone,
      timestamp,
      msg,
      temperature,
      apparentTemperature,
      humidity,
      icon,
      summary,
      time,
      windSpeed
    } = this.state;

    const convertedTemperature = this.changeTempFarenCelcius(temperature);
    let dateObj = this.getFormattedDate(timestamp);

    return (
      <div className="App ">
        <div className=" location">
          <h1 className=" location-timezone">{timezone}</h1>
          <p>
            <Skycons
              color="white"
              icon={this.setIcons(icon)}
              autoplay={true}
              height="128"
              width="128"
            />
          </p>
        </div>

        <div className=" temperature">
          <div className="degree-section">
            <h2 className="temperature-degree">{convertedTemperature}</h2>
          </div>
          <div className=" temperature-description">{summary}</div>
        </div>
        <div clasname="container-fluid">
          <div clasname="row">{dateObj}</div>
          <div clasname="row">windSpeed: {windSpeed}</div>
          <div clasname="row">humidity: {humidity}</div>
        </div>

        <div>{msg}</div>
      </div>
    );
  }
}

export default App;
