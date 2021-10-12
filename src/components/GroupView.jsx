import React, { useState } from 'react';

const GroupView = ({currentGroup}) => {
  return (
    <div className="groupViewContainer">
      <div className="container1">
        <div className="user">
          <img
            src="https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/202009/22/4ad34e67f99d611420529ba30f39427b.png"
            id="avartar"
          />
        </div>
        <div className="group"></div>
      </div>
      <div className="container2">
        <div id="transactions">Transactions</div>
        <div id="members">Members</div>
      </div>
      <div className="container3">
        {currentGroup.members && currentGroup.members.map((member) => {
          return(
            <li key={member.id} className="groupMember">{member.first_name}, {member.last_name}</li>
          )
        })}
      </div>
    </div>
  );
};

export default GroupView;