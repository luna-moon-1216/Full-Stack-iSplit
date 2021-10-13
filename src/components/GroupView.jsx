import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';


const GroupView = ({ currentGroup, allTransactions }) => {
  const [category, handleCategory] = useState("Transactions");

  const handleSwitch = (e) => {
    e.preventDefault();
    handleCategory(e.target.textContent);
  };

  const debtCalculator = (group) => {
    let total = 0;
    if (group.simplified_debts) {
      for (let i = 0; i < group.simplified_debts.length; i++) {
        total += group.simplified_debts[i].amount;
      }
    }

    return total;
  };

  const totalOwed = debtCalculator(currentGroup);

  return (
    <div className="groupViewContainer">
      <div className="container1">
        <div className="user">
          <img src={currentGroup.picture} id="avartar" />
          <div className="amount">
            <div className="owe">You owe 0 dollars</div>
            <div className="owe">You are owed {totalOwed} dollars</div>
          </div>
        </div>
        <div className="group">
          <div id="groupContainer1">
            <div id="groupName">{currentGroup.name}</div>
            <div id="countTransactions">
              {allTransactions.length} transactions in this group
            </div>
            <div id="countMembers">
              {currentGroup.members ? currentGroup.members.length : 0} members
              in this group
            </div>
          </div>
          <button id="settleUp">Settle Up</button>
        </div>
      </div>
      <div className="container2">
        <div id="transactions" onClick={handleSwitch}>
          Transactions
        </div>
        <div id="debts" onClick={handleSwitch}>
          Debts
        </div>
        <div id="members" onClick={handleSwitch}>
          Members
        </div>
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
        {category === "Transactions" && (
          <div>
            <VerticalTimeline>
              {category === "Transactions" &&
                allTransactions.map((transaction) => {
                  return (
                    <VerticalTimelineElement
                      key={transaction.id}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "#BC4639",
                        color: "#fff",
                        height: "100px",
                        padding: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #BC4639" }}
                      date={transaction.updated_at}
                      iconStyle={{
                        background: "#fff",
                        color: "#BC4639",
                        border: "2px solid #BC4639",
                      }}
                      icon={<FontAwesomeIcon icon={faMoneyBillAlt} size="lg" />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {transaction.description}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        ${transaction.cost}
                      </h4>
                      <p>{transaction.updated_at}</p>
                    </VerticalTimelineElement>
                  );
                })}
            </VerticalTimeline>
          </div>
        )}

        <div className="debtContainer">
          {category === "Debts" &&
            currentGroup.simplified_debts.map((debt, index) => {
              return (
                <div key={index} className="eachDebt">
                  <div className="borrower">
                    {debt.to} <br />${debt.amount}
                  </div>
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