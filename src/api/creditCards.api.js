import HTTP from './http';

const fetchAll = () => HTTP.get('creditcards');

const add = creditCard => HTTP.post('creditcards', creditCard);

const creditCards = {
  fetchAll,
  add,
};

export default creditCards;
