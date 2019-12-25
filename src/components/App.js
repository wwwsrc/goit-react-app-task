import React from "react";
import "./App.css";
import Counter from "./feedback/Feedback";
import Reader from "./reader/Reader";
import publications from "../publications.json";

const App = () => {
  return (
    <div>
      <Counter />
      <Reader items={publications} />
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
