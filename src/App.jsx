import React, { useState, useEffect } from 'react';
import Banner from './components/Banner.jsx';
import GroupList from './components/GroupList.jsx';
import GroupView from './components/GroupView.jsx';
import AddExpense from './components/AddExpense.jsx';
import PayorAndSplit from './components/PayorAndSplit.jsx';
import dummyData from '../server/db/dummyData.js';
console.log(dummyData)

const App = () => {

  const [groups, setGroups] = useState([]);
  const [currentGroup, SetCurrent] = useState({});
  const [allTransactions, setAllTransactions] = useState([]);
  const [showExpenseModal, setExpenseModal] = useState(false);
  const [showPayorModal, setPayorModal] = useState(false);
  const [payor, setPayor] = useState('You');

  useEffect(() => {
    setGroups(dummyData.groups);
    SetCurrent(dummyData.groups[1]);
    setAllTransactions(dummyData.transactions2);
  }, []);

  const handleGroupSelection = (e, groupId) => {
    e.preventDefault();
    SetCurrent(dummyData.groups[groupId - 1]);
    setAllTransactions(dummyData['transactions' + groupId]);
  };

  const handleModal = (e) => {
    e.preventDefault();
    setExpenseModal(!showExpenseModal);
  };

  const handlePayorSelection = (e, payor) => {
    e.preventDefault();
    setPayorModal(!showPayorModal);
    console.log(payor)
    if(payor) {
      setPayor(payor);
    }
  };

  return (
    <div className="parentContainer">
      <Banner />
      <div className="mainContainer">
        <GroupList groups={groups} handleGroupSelection={handleGroupSelection} handleModal={handleModal} />
        <GroupView currentGroup={currentGroup} allTransactions={allTransactions} />
      </div>
      <div className="relativeContainer">
        <AddExpense showExpenseModal={showExpenseModal} handleModal={handleModal} handlePayorSelection={handlePayorSelection} payor={payor} />
        <PayorAndSplit showPayorModal={showPayorModal} currentGroup={currentGroup} handlePayorSelection={handlePayorSelection} />
      </div>
    </div>
  );
};

export default App;