import React, { useState }from 'react';

const Banner = () => {
  const [showLogOut, setLogOut] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    console.log("clicked");
    setLogOut(!showLogOut);
  };

  return (
    <div className="banner">
      <div className="logo">
        <img id="logo" src="./logo.png" />
      </div>
      <div className="userInfo">
        <div onClick={handleLogOut}>Sailor Moon</div>
        {showLogOut && (
          <dialog open>
            <div className="logOutContainer">
              <div id="logOut">Log Out</div>
              <div id="delete">Delete Account</div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Banner;