import React, { useState } from 'react';

const GroupList = () => {
  return (
    <div className="groupListContainer">
      <div className="buttonContainer">
        <button id="createGroup"> Create Group</button>
        <button id="createExpense"> Create Expense</button>
      </div>
      <div className="groupList">
        <li> PlaceHolder</li>
      </div>
    </div>
  );
};

export default GroupList;