import React, { useState } from 'react';

const GroupList = ({ groups, handleGroupSelection, handleModal }) => {
  return (
    <div className="groupListContainer">
      <div className="buttonContainer">
        <button id="createGroup"> Create Group</button>
        <button id="createExpense" onClick={(e) => {handleModal(e)}}> Create Expense</button>
      </div>
      <div className="groupList">
        {groups.map((group) => {
          return (
            <li key={group.id} className="groupName" onClick={(e) => { handleGroupSelection(e, group.id) }}>
              {group.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default GroupList;