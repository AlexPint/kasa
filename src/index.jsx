//React
import React from 'react';
import ReactDOM from 'react-dom/client';
//Router
import { BrowserRouter } from "react-router-dom";
//Application
import App from "./App";
// Styles
import "./styles/index.scss";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
