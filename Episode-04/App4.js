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

const Resturantcard = () => {
  return (
    <div className="res-card">
      <h3>Meghna Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
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
