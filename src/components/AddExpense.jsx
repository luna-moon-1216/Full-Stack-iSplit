import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const AddExpense = ({showExpenseModal, handleModal, handlePayorSelection, payor}) => {

  if(showExpenseModal) {
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
              <FontAwesomeIcon className="receipt" icon={faFileInvoiceDollar} size="7x" />
              <div className="detailContainer2">
                <input placeholder="Enter a description"></input>
                <label>
                  $
                  <input placeholder="0.00"></input>
                </label>
              </div>
            </div>
            <div className="splitDetail">
              Paid by
              <a className="payer" onClick={(e) => {handlePayorSelection(e)}}> {payor} </a>
              and split
              <a className="split"> Equally</a>
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