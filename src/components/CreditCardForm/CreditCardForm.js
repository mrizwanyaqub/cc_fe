import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createCreditCards,
  setCreditCardFormState,
} from '../../store/creditCard.actions';
import Input from '../Input/Input';
import './CreditCardForm.css';

const CreditCardForm = ({ actions, creditCard, errors }) => {
  const fieldErrors = useMemo(() => {
    return {
      name: errors
        .filter(e => e.message.includes('name'))
        .map(e => e.message)
        .join('; '),
      cardNumber: errors
        .filter(e => e.message.includes('cardNumber'))
        .map(e => e.message)
        .join('; '),
      limit: errors
        .filter(e => e.message.includes('limit'))
        .map(e => e.message)
        .join('; '),
    };
  }, [errors]);
  const updateFormState = (field, value) => {
    actions.setCreditCardFormState({
      [field]: value,
    });
  };
  const onButtonClick = () => {
    actions.createCreditCards(creditCard);
  };
  return (
    <div className="formContainer">
      <Input
        label="Name"
        onChange={e => updateFormState('name', e.target.value)}
        value={creditCard.name}
        error={fieldErrors.name}
      />
      <Input
        label="Card Number"
        onChange={e => updateFormState('cardNumber', e.target.value)}
        value={creditCard.cardNumber}
        error={fieldErrors.cardNumber}
      />
      <Input
        label="Limit"
        onChange={e => updateFormState('limit', e.target.value)}
        value={creditCard.limit}
        error={fieldErrors.limit}
      />
      <button type="button" className="addButton" onClick={onButtonClick}>
        Add
      </button>
    </div>
  );
};

CreditCardForm.propTypes = {
  actions: PropTypes.object.isRequired,
  creditCard: PropTypes.object.isRequired,
  errors: PropTypes.array.isRequired,
};

const mapStateToProp = state => ({
  creditCard: state.creditCards.form,
  errors: state.creditCards.errors,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createCreditCards,
      setCreditCardFormState,
    },
    dispatch
  ),
  dispatch,
});

export default connect(mapStateToProp, mapDispatchToProps)(CreditCardForm);
