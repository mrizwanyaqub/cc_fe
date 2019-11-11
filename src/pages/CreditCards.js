import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCreditCards } from '../store/creditCard.actions';
import { CreditCardForm, ListItems, Loader } from '../components';
import './CreditCards.css';

const CreditCards = ({ actions, loading }) => {
  useEffect(() => {
    actions.getCreditCards();
  }, []); //eslint-disable-line

  return (
    <>
      {loading && <Loader />}
      <div className="container containerPadding">
        <div className="content">
          <span className="pageHeading">Credit Card System</span>
          <span className="formHeading">Add</span>
          <div className="cardForm">
            <CreditCardForm />
          </div>
          <ListItems />
        </div>
      </div>
    </>
  );
};

CreditCards.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProp = state => ({
  loading: state.creditCards.attempting,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getCreditCards,
    },
    dispatch
  ),
  dispatch,
});

export default connect(mapStateToProp, mapDispatchToProps)(CreditCards);
