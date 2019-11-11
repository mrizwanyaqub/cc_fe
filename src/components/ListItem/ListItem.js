import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ creditCard }) => {
  return (
    <div className="listItemContainer">
      <div className="listItemHeadingLabel">{creditCard.name}</div>
      <div className="listItemHeadingLabel">{creditCard.cardNumber}</div>
      <div className="listItemHeadingLabel">{creditCard.balance}</div>
      <div className="listItemHeadingLabel">{creditCard.limit}</div>
    </div>
  );
};

ListItem.propTypes = {
  creditCard: PropTypes.object.isRequired,
};

export default ListItem;
