import React, { useState, useEffect } from 'react';
import Banner from './components/Banner.jsx';
import GroupList from './components/GroupList.jsx';
import GroupView from './components/GroupView.jsx';
import dummyData from '../server/db/dummyData.js';
console.log(dummyData)

const App = () => {

  const [groups, setGroups] = useState([]);
  const [currentGroup, SetCurrent] = useState({});

  useEffect(() => {
    setGroups(dummyData.groups);
    SetCurrent(dummyData.groups[0]);
  }, []);

  return (
    <div className="parentContainer">
      <Banner />
      <div className="mainContainer">
        <GroupList groups={groups} />
        <GroupView currentGroup={currentGroup} />
      </div>
    </div>
  );
};

export default App;