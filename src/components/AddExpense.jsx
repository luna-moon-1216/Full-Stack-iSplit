import React, { useState } from 'react';

const AddExpense = ({showModal, handleModal}) => {
  if(showModal) {
    return (
      <div className="modalContainer">
        <div className="modalContent">
          <div className="modalHeader">
            <h4 className="modalTitle">New Transactions</h4>
            <button onClick={(e) => {handleModal(e)}}>X</button>
          </div>
          <div className="modalBody">
            <form>
              <label>
                With you and:
                <input placeholder="Enter names or email addresses"></input>
              </label>
            </form>
            <div className="detailContainer">
              <img src="" />
              <div className="detailContainer2">
             </div>
            </div>
          </div>
          <div className="modalFooter">
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AddExpense;