import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import user from "./user.json";
//import Profile from "../src/components/profile/Profile";

ReactDOM.render(<App user={user} />, document.getElementById("root"));

// ReactDOM.render(<Profile user={user} />, document.getElementById("rt"));
