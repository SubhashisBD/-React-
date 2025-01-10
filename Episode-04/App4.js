import React from "react";
import ReactDOM from "react-dom/client";

console.log("BhanjDeo");

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Box
 *  - Resturant Card
 *    -Img
 *    -Name
 *    -Star Rating,Cuisine
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Basically style takes js Object.
const styleCard = {
  backgroundColor : "#f0f0f0"
};

const Resturantcard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/4/18766564/e74b217c7e258776494a73ca362e585e.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="logo"></img>
      <h3>Meghna Foods</h3>
      <h4>North Indian,Asian</h4>
      <h4>4.4Star</h4>
      <h4>35 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Resturantcard />
        <Resturantcard />
        <Resturantcard />
        <Resturantcard />
        <Resturantcard />
        <Resturantcard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
