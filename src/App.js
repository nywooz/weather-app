import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherApp from "./components/WeatherApp/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faCalendarDay,
  faWind,
  faTint
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faCalendarDay, faWind, faTint);

class App extends Component {
  render() {
    return (
      <div>
        <WeatherApp />
      </div>
    );
  }
}

export default App;
