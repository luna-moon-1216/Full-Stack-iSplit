import React, { useState } from 'react';

const PayorAndSplit = ({currentGroup, showPayorModal, handlePayorSelection}) => {
  if(!showPayorModal) {
    return null;
  } else {
    return (
      <div className="modalContainer" id="payorModal">
        <div className="modalContent">
          <div className="modalHeader">
            <h4 className="modalTitle">Choose payer</h4>
          </div>
          <div className="modalBody">
            {currentGroup.members && currentGroup.members.map((member) => {
              return(
                <li key={member.id} onClick={(e) => {handlePayorSelection(e, e.target.textContent)}}>{member.first_name} {member.last_name}</li>
              )
            })}
          </div>
          <div className="modalFooter"></div>
        </div>
      </div>
    );
  }
};

export default PayorAndSplit;