/*
const heading = React.createElement("h1", 
    {id:"heading"}, 
    "Hello World!");
// heading is a object here as react element.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// Render method responsible for create a h1 tag and put in the Dom 
*/

/**
 *
 * <div id ="parent">
 *      <div id = "child">
 *          <h1>I'm h1 tag<h1>
 *          <h2>I'm h2 tag<h2>
 *       </div>
 * </div>
 *
 */

// ReactElement(Object) = HTML(Browser Understand)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm an h1 tag"),React.createElement("h1",{},"I'm an h2 tag")]
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
