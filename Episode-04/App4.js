import React from "react";
import ReactDOM from "react-dom/client";


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
  backgroundColor: "#f0f0f0",
};

// Destructing of object can also be written = ({resName,cuisine})
const Resturantcard = (props) => {
  console.log(props);

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/4/18766564/e74b217c7e258776494a73ca362e585e.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        alt="logo"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 Star</h4>
      <h4>35 minutes</h4>
    </div>
  );
};


const resList = [
  {
    id: "1001",
    name: "Santosh Family Dhaba",
    receipe: "Tomato Soup",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "22 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
  },
  {
    id: "1002",
    name: "Cafe Niloufer",
    receipe: "Maska Bun",
    rating: "4.5",
    price: "₹400 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
  },
  {
    id: "1003",
    name: "Santosh Family Dhaba",
    receipe: "Crispy Corn",
    rating: "4.5",
    price: "₹560 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
  },
  {
    id: "1004",
    name: "Grameen Kulfi",
    receipe: "Sitaphal Stick Kulfi",
    rating: "4.6",
    price: "₹120 for two",
    deliveryTime: "18 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
  },
  {
    id: "1005",
    name: "Nrs Nandini",
    receipe: "Idli",
    rating: "4.4",
    price: "₹150 for two",
    deliveryTime: "21 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
  },
  {
    id: "1006",
    name: "Utsav Vegetarian",
    receipe: "Kaju Paneer Biryani",
    rating: "4.1",
    price: "₹300 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
  },
  {
    id: "1007",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
];


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Resturantcard
          /* Passing pros to an component as object*/
          resName="Meghana Foods"
          cuisine="North Indian,Asian"
        />
        <Resturantcard resName="KFC" cuisine="Burger,Fast-Food"/>
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
