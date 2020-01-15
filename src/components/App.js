import React from "react";
import "./App.css";
import Counter from "./feedback/Feedback";
import Reader from "./reader/Reader";
import publications from "../publications.json";
import Phonebook from "./phonebook/Phonebook";

const App = () => {
  return (
    <div>
      <Counter />
      <Reader items={publications} />
      <Phonebook />
    </div>
  );
};

export default App;

// import React from "react";
// import Counter from "./counter/Counter.js";

// const App = () => (
//   <div>
//     <Counter />
//   </div>
// );

// export default App;
