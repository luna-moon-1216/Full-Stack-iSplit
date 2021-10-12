import React, { useState } from 'react';

const GroupList = ({ groups }) => {
  return (
    <div className="groupListContainer">
      <div className="buttonContainer">
        <button id="createGroup"> Create Group</button>
        <button id="createExpense"> Create Expense</button>
      </div>
      <div className="groupList">
        {groups.map((group) => {
          return (
            <li key={group.id} className="groupName">
              {group.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default GroupList;