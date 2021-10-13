import React, { useState } from 'react';
import axios from 'axios';


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

  // const handleAnouncement = (e) => {
  //   e.preventDefault();
  //   setTimeout(speak(group + ' group has been successfully created'), 3000);

  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/groups', {name: group, picture: ''})
    .then((res) => {
      console.log(res);
      createGroup('');
    })
    .catch((err) => {
      console.log(err);
    })
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
        <div className="modalFooter" id="groupFooter">
          <button id="modalCreateGroup" onClick={handleSubmit}>Create group</button>
          <button id="exitGroup" onClick={(e) => {handleShowGroup(e)}}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;