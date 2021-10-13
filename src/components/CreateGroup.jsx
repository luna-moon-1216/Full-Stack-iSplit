import React, { useState } from 'react';


const speak = (msg) => {
  const sp = new SpeechSynthesisUtterance(msg);
  [sp.voice] = speechSynthesis.getVoices();
  speechSynthesis.speak(sp);
};

const CreateGroup = ({handleShowGroup, showGroupModal}) => {

  const [group, createGroup] = useState('');

  const handleCreateGroup = (e) => {
    e.preventDefault();
    createGroup(e.target.value);
  };

  const handleAnouncement = (e) => {
    e.preventDefault();
    setTimeout(speak(group + ' group has been successfully created'), 3000);

  };

  return (showGroupModal &&
    <div className="modalContainer" >
      <div className="modalContent">
        <div className="modalHeader">
          <h4 className="modalTitle">New Group</h4>
        </div>
        <div className="modalBody">
          <input placeholder="Group name" value={group} onChange={handleCreateGroup}></input>
        </div>
        <div className="modalFooter">
          <button onClick={handleAnouncement}>Create group</button>
          <button onClick={(e) => {handleShowGroup(e)}}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;