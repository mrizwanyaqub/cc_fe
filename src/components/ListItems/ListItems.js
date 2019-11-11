import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './ListItems.css';

const ListItems = ({ creditCards }) => {
  return (
    <div className="listItemsContainer">
      <div className="listItemsHeading">
        <div className="listItemsHeadingLabel mobileShow">Name</div>
        <div className="listItemsHeadingLabel mobileShow">Card Number</div>
        <div className="listItemsHeadingLabel mobileHide">Balance</div>
        <div className="listItemsHeadingLabel mobileHide">Limit</div>
      </div>
      {creditCards.map(cc => (
        <ListItem key={cc.id} creditCard={cc} />
      ))}
    </div>
  );
};

ListItems.propTypes = {
  creditCards: PropTypes.array.isRequired,
};

const mapStateToProp = state => ({
  creditCards: state.creditCards.list,
});

export default connect(mapStateToProp)(ListItems);
