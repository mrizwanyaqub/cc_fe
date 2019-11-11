import ACTION_TYPES from './creditCard.constants';
import { creditCards as API } from '../api';
import { validateCreditCardPost } from '../utils/validations/validators/creditCardValidator';

/**
 * Gets or resets credit cards
 * @returns {Function}
 */
export const getCreditCards = () => async dispatch => {
  dispatch(getCreditCardsRequest());
  try {
    const payload = await API.fetchAll();
    dispatch(getCreditCardsSuccess(payload));
  } catch (errors) {
    dispatch(getCreditCardsError(errors));
  }
};

/**
 * Gets or resets credit cards
 * @returns {Function}
 */
export const setCreditCardFormState = creditCard => async (
  dispatch,
  getState
) => {
  const state = getState();
  const ccObj = {
    ...state.creditCards.form,
    ...creditCard,
  };
  const errors = validateCreditCardPost(ccObj);
  if (errors.length)
    dispatch(createCreditCardsError(errors.map(e => ({ message: e }))));
  else dispatch(createCreditCardsError([]));

  dispatch(setCreditCardsFormState(creditCard));
};

/**
 * creates new credit card
 * @param creditCard
 * @returns {Function}
 */
export const createCreditCards = creditCard => async dispatch => {
  dispatch(createCreditCardsRequest());
  try {
    const payload = await API.add(creditCard);
    dispatch(createCreditCardsSuccess(payload));
  } catch (errors) {
    dispatch(createCreditCardsError(errors));
  }
};

/**
 * Actions
 */
export function getCreditCardsRequest() {
  return { type: ACTION_TYPES.GET_CREDIT_CARDS_REQUEST };
}

export function getCreditCardsSuccess(payload) {
  return { type: ACTION_TYPES.GET_CREDIT_CARDS_SUCCESS, payload };
}

export function getCreditCardsError(errors) {
  return { type: ACTION_TYPES.GET_CREDIT_CARDS_ERROR, errors };
}

export function setCreditCardsFormState(payload) {
  return { type: ACTION_TYPES.SET_CREDIT_CARDS_FORM_STATE, payload };
}

export function createCreditCardsRequest() {
  return { type: ACTION_TYPES.CREATE_CREDIT_CARD_REQUEST };
}

export function createCreditCardsSuccess(payload) {
  return { type: ACTION_TYPES.CREATE_CREDIT_CARD_SUCCESS, payload };
}

export function createCreditCardsError(errors) {
  return { type: ACTION_TYPES.CREATE_CREDIT_CARD_ERROR, errors };
}
