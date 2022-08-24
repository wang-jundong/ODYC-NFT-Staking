import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "react-notifications-component/dist/theme.css";

function getLibrary(provider) {
	return new Web3(provider);
}

ReactDOM.render(
	<React.StrictMode>
		<Web3ReactProvider getLibrary={getLibrary}>
			<Provider store={store}>
				<App />
			</Provider>
		</Web3ReactProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
