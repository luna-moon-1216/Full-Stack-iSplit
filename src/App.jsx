import React, { useState } from 'react';
import Banner from './components/Banner.jsx';
import GroupList from './components/GroupList.jsx';
import GroupView from './components/GroupView.jsx';

const App = () => {
  return (
    <div className="parentContainer">
      <Banner />
      <div className="mainContainer">
        <GroupList />
        <GroupView />
      </div>
    </div>
  );
};

export default App;