import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const appDiv = document.getElementById('app');
console.log(appDiv)
render(<App name="xuiedhe"/>, appDiv);