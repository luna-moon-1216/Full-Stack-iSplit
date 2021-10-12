import React, { useState } from 'react';

const GroupView = ({ currentGroup, allTransactions }) => {

  const [category, handleCategory] = useState('Transactions');

  const handleSwitch = (e) => {
    e.preventDefault();
    handleCategory(e.target.textContent);
  };


  return (
    <div className="groupViewContainer">
      <div className="container1">
        <div className="user">
          <img
            src={currentGroup.picture}
            id="avartar"
          />
          <div className="amount">
            <div>You owe 0 dollars</div>
            <div>You are owed 0 dollars</div>
          </div>
        </div>
        <div className="group">
          <div id="groupName">{currentGroup.name}</div>
          <div id="countTransactions">{allTransactions.length} transactions in this group</div>
          <div id="countMembers">{currentGroup.members ? currentGroup.members.length : 0} members in this group</div>
          <button id="settleUp">Settle Up</button>
        </div>
      </div>
      <div className="container2">
        <div id="transactions" onClick={handleSwitch}>Transactions</div>
        <div id="debts" onClick={handleSwitch}>Debts</div>
        <div id="members" onClick={handleSwitch}>Members</div>
      </div>
      <div className="container3">
        <div className="memberContainer">
          {category === "Members" &&
            currentGroup.members.map((member) => {
              return (
                <li key={member.id} className="groupMember">
                  {member.first_name} {member.last_name}
                </li>
              );
            })}
        </div>
        <div className="transactionContainer">
          {category === "Transactions" && allTransactions.map((transaction) => {
            return(
              <li key={transaction.id} className="transaction">${transaction.cost}, {transaction.description}, {transaction.updated_at}</li>
            );
          })}
        </div>
        <div className="debtContainer">
          {category === "Debts" && currentGroup.simplified_debts.map((debt, index) => {
            return(
              <div key={index} className="eachDebt">
                <div className="borrower">{debt.to}  ${debt.amount}</div>
                <div className="arrow">&#x2192;</div>
                <div className="lender">{debt.from}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupView;