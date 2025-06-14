import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./styles/global.css";
import "./index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

import "@fortawesome/fontawesome-free/css/all.min.css";
//prime react
// import { PrimeReactProvider } from "primereact/api";
// import "primereact/resources/themes/lara-light-blue/theme.css"; // theme
// import "primereact/resources/primereact.min.css"; // core styles
// import "primeflex/primeflex.css";
//redux
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { rootReducer } from "./components/reducers/rootReducer";
// const reduxStore = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <Provider store={reduxStore}>

  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
