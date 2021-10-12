import React, { useState, useEffect } from 'react';
import Banner from './components/Banner.jsx';
import GroupList from './components/GroupList.jsx';
import GroupView from './components/GroupView.jsx';
import AddExpense from './components/AddExpense.jsx';
import dummyData from '../server/db/dummyData.js';
console.log(dummyData)

const App = () => {

  const [groups, setGroups] = useState([]);
  const [currentGroup, SetCurrent] = useState({});
  const [allTransactions, setAllTransactions] = useState([]);
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    setGroups(dummyData.groups);
    SetCurrent(dummyData.groups[1]);
    setAllTransactions(dummyData.transactions2);
  }, []);

  const handleGroupSelection = (e, groupId) => {
    e.preventDefault();
    SetCurrent(dummyData.groups[groupId - 1]);
    setAllTransactions(dummyData['transactions' + groupId]);
  }

  const handleModal = (e) => {
    e.preventDefault();
    setModal(!showModal);
  }

  return (
    <div className="parentContainer">
      <Banner />
      <div className="mainContainer">
        <GroupList groups={groups} handleGroupSelection={handleGroupSelection} handleModal={handleModal} />
        <GroupView currentGroup={currentGroup} allTransactions={allTransactions} />
      </div>
      <AddExpense showModal={showModal} handleModal={handleModal} />
    </div>
  );
};

export default App;