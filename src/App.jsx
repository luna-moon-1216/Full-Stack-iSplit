import React, { useState, useEffect } from 'react';
import LogIn from './components/LogIn.jsx';
import Banner from './components/Banner.jsx';
import GroupList from './components/GroupList.jsx';
import GroupView from './components/GroupView.jsx';
import AddExpense from './components/AddExpense.jsx';
import PayorAndSplit from './components/PayorAndSplit.jsx';
import CreateGroup from './components/CreateGroup.jsx';
import Footer from './components/Footer.jsx';
import dummyData from '../server/db/dummyData.js';

import firebaseAuth from '../server/firebase/auth.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

const auth = getAuth();
// console.log(dummyData)

const App = () => {

  const [groups, setGroups] = useState([]);
  const [currentGroup, SetCurrent] = useState({});
  const [allTransactions, setAllTransactions] = useState([]);
  const [showExpenseModal, setExpenseModal] = useState(false);
  const [showPayorModal, setPayorModal] = useState(false);
  const [showSplitModal, setSplitModal] = useState(false);
  const [showGroupModal, setGroupModal] = useState(false);
  const [payor, setPayor] = useState('You');
  const [split, setSplit] = useState('equally');
  const [userStatus, setUser] = useState('');

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

  const handleSplitSelection = (e, split) => {
    e.preventDefault();
    setSplitModal(!showSplitModal);
    if(split) {
      setSplit(split);
    }
  };

  const handleShowGroup = (e) => {
    e.preventDefault();
    setGroupModal(!showGroupModal);
  }

  const handleSignIn = (e, email, password) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      setUser(userCredential.user)
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  if(!userStatus) {
    return(
      <LogIn handleSignIn={handleSignIn}/>
    )
  } else {
    return (
      <div className="parentContainer">
        <Banner />
        <div className="mainContainer">
          <GroupList groups={groups} handleGroupSelection={handleGroupSelection} handleModal={handleModal} handleShowGroup={handleShowGroup} />
          <GroupView currentGroup={currentGroup} allTransactions={allTransactions} />
          <CreateGroup handleShowGroup={handleShowGroup} showGroupModal={showGroupModal} />
        </div>
        <div className="relativeContainer">
          <AddExpense showExpenseModal={showExpenseModal} handleModal={handleModal} handlePayorSelection={handlePayorSelection} payor={payor} handleSplitSelection={handleSplitSelection} split={split} />
          <PayorAndSplit showPayorModal={showPayorModal} currentGroup={currentGroup} handlePayorSelection={handlePayorSelection} showSplitModal={showSplitModal} handleSplitSelection={handleSplitSelection} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;