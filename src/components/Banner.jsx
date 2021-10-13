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
      <div className="logo">iSplit</div>
      <div className="userInfo" >
        <div onClick={handleLogOut}>Sailor Moon</div>
        {showLogOut && (
          <dialog open>
            <div>Log Out</div>
            <div>Delete Account</div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Banner;