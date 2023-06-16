import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import searchicon from "../../assests/Logos/Search.png";
import HomePage from "../../pages/homepage/homepage";
import MyCommunity from "../MyCommunity/MyCommunity";

function Navbar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="featuresdisplay">
        <div className="navbarleft">
          <div className="searchandbuttons">
            <div className="navhead-searcharea">
              <img
                className="navhead-searchicon"
                src={searchicon}
                alt="search"
              />
              <input
                className="navhead-input"
                type="text"
                name="name"
                placeholder="Search"
              />
            </div>

            <button
              className="navigationbtn"
              id="headnav"
              onClick={() => handleTabClick(0)}
            >
              My Home
            </button>
            <button
              className="navigationbtn"
              id="headnav"
              onClick={() => handleTabClick(1)}
            >
              Community
            </button>
            <button className="navigationbtn" onClick={() => handleTabClick(2)}>
              My community
            </button>
            <button className="navigationbtn" onClick={() => handleTabClick(3)}>
              My Events
            </button>
            <button
              className="navigationbtn"
              id="headnav"
              onClick={() => handleTabClick(4)}
            >
              EA PLAY
            </button>
            <button
              className="navigationbtn"
              id="headnav"
              onClick={() => handleTabClick(5)}
            >
              Store
            </button>
            <button className="navigationbtn" onClick={() => handleTabClick(6)}>
              Browse Games
            </button>
            <button className="navigationbtn" onClick={() => handleTabClick(7)}>
              Deals
            </button>
            <button
              className="navigationbtn"
              id="headnav"
              onClick={() => handleTabClick(8)}
            >
              My Game Library
            </button>
            <button className="navigationbtn" onClick={() => handleTabClick(9)}>
              Notifications
            </button>
            <button
              className="navigationbtn"
              onClick={() => handleTabClick(10)}
            >
              Help
            </button>
          </div>

          <div className="userprofile">
            <h4>userprofile</h4>
            <img></img>
          </div>
        </div>

        <div className="usercontent">
          {activeTab === 0 && (
            <div className="profiledetails">
              <h1>My Home</h1>

              <div className="personeldetails">
                <HomePage />

                <div></div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h1>Comunity</h1>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h1>My community</h1>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <h1>My Events</h1>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <h1>EA PLAY</h1>
            </div>
          )}
          {activeTab === 5 && (
            <div>
              <h1>Store</h1>
            </div>
          )}
          {activeTab === 6 && (
            <div>
              <h1>Browse Games</h1>
            </div>
          )}
          {activeTab === 7 && (
            <div>
              <h1>Deals</h1>
            </div>
          )}
          {activeTab === 8 && (
            <div>
              <h1>My Game Library</h1>
            </div>
          )}
          {activeTab === 9 && (
            <div>
              <h1>Notifications</h1>
            </div>
          )}
          {activeTab === 10 && (
            <div>
              <h1>Help</h1>
            </div>
          )}
        </div>
        <div>
          <MyCommunity />
        </div>
      </div>
    </>
  );
}

export default Navbar;
