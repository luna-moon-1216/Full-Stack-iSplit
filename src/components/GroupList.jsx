import React, { useState } from 'react';

const GroupList = ({ groups, handleGroupSelection, handleModal, handleShowGroup }) => {
  return (
    <div className="groupListContainer">
      <div className="buttonContainer">
        <button id="createGroup" onClick={(e) => {handleShowGroup(e)}}> Create Group</button>
        <button id="createExpense" onClick={(e) => {handleModal(e)}}> Create Expense</button>
      </div>
      <div className="groupList">
        <div id="list">Group List</div>
        <div className="groupContainer">
        {groups.map((group) => {
          return (
            <li key={group.id} className="groupName" onClick={(e) => { handleGroupSelection(e, group.id) }}>
              {group.name}
            </li>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default GroupList;