import React from 'react';
import box1Image from './images/box1.jpg';
import box2Image from './images/box3_image.jpg.jpg';
import box3Image from './images/box4_image.jpg.jpg';
import box4Image from './images/box5_image.jpg.jpg';
import box5Image from './images/box6_image.jpg.jpg';
import box6Image from './images/box7_image.jpg.jpg';
import box7Image from './images/box8_image.jpg.jpg';
function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amazon</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header>
          <div className="navbar">
            <div className="nav-logo border">
              <div className="logo"></div>
            </div>
            <div className="nav_address border">
              <p className="add-first">Deliver to</p>
              <div className="add-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="add-sec">India</p>
              </div>
            </div>
            <div className="nav-search">
              <select className="search-select">
                <option>All</option>
              </select>
              <input placeholder="Search Amazon" className="search-input" />
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="nav-signin border">
              <p><span>Hello, sign in</span></p>
              <p className="nav-second">Account & Lists</p>
            </div>
            <div className="nav-return border">
              <p><span>Returns</span></p>
              <p className="nav-second">& Orders</p>
            </div>
            <div className="nav-cart border">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </div>
          </div>
          <div className="panel">
            <div className="panel-all">
              <i className="fa-solid fa-bars"></i>
              All
            </div>
            <div className="panel-ops">
              <p>Today's Deals</p>
              <p>Customer Service</p>
              <p>Registry</p>
              <p>Gift Cards</p>
              <p>Sell</p>
            </div>
            <div className="panel-deals">
              Shop deals in Electronics
            </div>
          </div>
        </header>
        <div className="hero-section">
          <div className="hero-msg">
            <p style={{ color: '#0f1111' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a className="link" href="">Click here to go to amazon.in</a></p>
          </div>
        </div>
        <div className="shop-section">
      <div className="box1 box">
        <div className="box-content">
          <h2>Health & Personal Care</h2>
          <div className="box-img" style={{backgroundImage: `url(${box1Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
      <div className="box2 box">
        <div className="box-content">
          <h2>Furniture & stuff</h2>
          <div className="box-img" style={{backgroundImage: `url(${box2Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
      <div className="box3 box">
        <div className="box-content">
          <h2>Electronics & appliances</h2>
          <div className="box-img" style={{backgroundImage: `url(${box3Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
      <div className="box4 box">
        <div className="box-content">
          <h2>Beauty picks</h2>
          <div className="box-img" style={{backgroundImage: `url(${box4Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>

      <div className="box1 box">
        <div className="box-content">
          <h2>Pet care</h2>
          <div className="box-img" style={{backgroundImage: `url(${box5Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
      <div className="box2 box">
        <div className="box-content">
          <h2>Toys & gifts</h2>
          <div className="box-img" style={{backgroundImage: `url(${box6Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
      <div className="box3 box">
        <div className="box-content">
          <h2>Clothings & new arrivals</h2>
          <div className="box-img" style={{backgroundImage: `url(${box7Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
      <div className="box4 box">
        <div className="box-content">
          <h2>Health & Personal Care</h2>
          <div className="box-img" style={{backgroundImage: `url(${box1Image})`}}></div>
          <p>See more</p> 
        </div>
      </div>
    </div>
    <footer>
  <div className="foot-panel1">
    Back to top
  </div>

  <div className="foot-panel2">
    <ul>
      <li>
        <p>Get to Know Us</p>
        <a>Careers</a>
        <a>Blog</a>
        <a>About Amazon</a>
        <a>Investor Relations</a>
        <a>Amazon Devices</a>
        <a>Amazon Science</a>
      </li>
    </ul>

    <ul>
      <li>
        <p>Make Money with Us</p>
        <a>Sell products on Amazon</a>
        <a>Sell on Amazon Business</a>
        <a>Sell apps on Amazon</a>
        <a>Become an Affiliate</a>
        <a>Advertise Your Products</a>
        <a>Self-Publish with Us</a>
        <a>Host an Amazon Hub</a>
        <a>Host an Amazon Hub</a>
        <a>See More Make Money with Us</a>
      </li>
    </ul>

    <ul>
      <li>
        <p>Amazon Payment Products</p>
        <a>Amazon Business Card</a>
        <a>Shop with Points</a>
        <a>Reload Your Balance</a>
        <a>Amazon Currency Converter</a>
      </li>
    </ul>

    <ul>
      <li>
        <p>Amazon Currency Converter</p>
        <a>Amazon and COVID-19</a>
        <a>Your Account</a>
        <a>Your Orders</a>
        <a>Shipping Rates & Policies</a>
        <a>Returns & Replacements</a>
        <a>Manage Your Content and Devices</a>
        <a>Amazon Assistant</a>
        <a>Help</a>
      </li>
    </ul>
  </div>

  <div className="foot-panel3">
    <div className="logo"></div>
  </div>

  <div className="foot-panel4">
    <div className="pages">
      <a>Conditions of use</a>
      <a>Privacy Notice</a>
      <a>Yours Ads Privacy Choices</a>
    </div>

    <div className="copyright">
      © 1996-2023, Amazon.com, Inc. or its affiliates
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}

export default App;
