import React, { useState } from 'react';
import useGlobalState from '../store';
import Input from './Input';
import './CreditCardForm.css';

const CreditCardForm = () => {
  const { creditCards } = useGlobalState();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [limit, setLimit] = useState('');
  const onButtonClick = _=>_;
  return (
    <div className="formContainer">
      <Input
        label="Name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Input
        label="Card Number"
        onChange={e => setCardNumber(e.target.value)}
        value={cardNumber}
      />
      <Input
        label="Limit"
        onChange={e => setLimit(e.target.value)}
        value={limit}
      />
        <button className="addButton" onClick={onButtonClick}>Add</button>
    </div>
  );
};

export default CreditCardForm;
