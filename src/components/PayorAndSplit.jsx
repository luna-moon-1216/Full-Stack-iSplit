import React, { useState } from 'react';

const PayorAndSplit = ({currentGroup, showPayorModal,showSplitModal, handlePayorSelection, handleSplitSelection}) => {

  const [option, setOption] = useState('equally');

  const handleOptions = (e) => {
    e.preventDefault();
    setOption(e.target.textContent);
  }

  if(showPayorModal) {
    return(
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
    )
  } else if(showSplitModal) {
    return(
      <div className="modalContainer" id="splitModal">
      <div className="modalContent">
        <div className="modalHeader">
          <h4 className="modalTitle">Choose split options</h4>
        </div>
        <div className="modalBody">
          <li>equally</li>
          <li onClick={handleOptions}>by exact amount</li>
          <li onClick={handleOptions}>by percentages</li>
        </div>
        <div className="options">
          {option !== 'equally' && currentGroup.members.map((member) => {
            return(
              <label key={member.id} className="option">
                {member.first_name} {member.last_name}:
                <input className="share"></input>
                {option === 'by exact amount' ? '$' : "%"}
              </label>
            )
          })}
        </div>
        <div className="modalFooter">
          <button onClick={(e) => {handleSplitSelection(e, option)}}>Save</button>
        </div>
      </div>
    </div>
    )
  } else {
    return null;
  }
};

export default PayorAndSplit;