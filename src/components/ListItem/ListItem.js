import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ creditCard }) => {
  return (
    <div className="listItemContainer">
      <div className="listItemHeadingLabel mobileShow">{creditCard.name}</div>
      <div className="listItemHeadingLabel mobileShow">{creditCard.cardNumber}</div>
      <div className="listItemHeadingLabel mobileHide">{creditCard.balance}</div>
      <div className="listItemHeadingLabel mobileHide">{creditCard.limit}</div>
    </div>
  );
};

ListItem.propTypes = {
  creditCard: PropTypes.object.isRequired,
};

export default ListItem;
