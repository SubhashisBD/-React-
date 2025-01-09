import React from "react";
import ReactDOM from "react-dom/client";

// JSX - JavaScript XML ---HTML-like or XML-like syntax that is translated to JavaScript.

// JSX=> Babel transpile before it goes to js-engine =>React.createElement=>ReactElement.JS Object=>HTMLElement(render).

// React ELement
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello World!
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Functional Component => Function that returns a React Element.
// Component Composition => Combine multiple components to create a new component.
// Component should be Capitalized.
const number = 1000;
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* <JsxHeading />  or <JsxHeading></JsxHeading> Both are same. jsxHeading()*/}
      {number + 1286}
      {jsxHeading}
      <h1>BhanjDeo is Hereeeeeeeeeee!</h1>
    </div>
  );
};
root.render(<HeadingComponent />);

// Class Based Component - OLD
// Functional Component -NEW
