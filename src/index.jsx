import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";


const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(<App />);
//ReactPDF.render(<MyDocument />, 'example.pdf');
//ReactDOM.createRoot(entryPoint).render(React.createElement(App));
