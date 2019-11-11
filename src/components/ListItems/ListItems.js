import React from 'react';
import ListItem from './ListItem';
import useGlobalState from '../store';
import './ListItems.css';

const ListItems = () => {
  const { creditCards } = useGlobalState();
  return (
    <div className="listItemsContainer">
      <div className="listItemsHeading">
        <div className="listItemsHeadingLabel">Name</div>
        <div className="listItemsHeadingLabel">Card Number</div>
        <div className="listItemsHeadingLabel">Balance</div>
        <div className="listItemsHeadingLabel">Limit</div>
      </div>
      {creditCards.list.map(cc => (
        <ListItem key={cc.id} creditCard={cc} />
      ))}
    </div>
  );
};

export default ListItems;
