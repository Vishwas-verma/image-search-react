import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <b>Hi This Is My New Project!!</b>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));