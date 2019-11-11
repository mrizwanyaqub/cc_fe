import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../creditCard.actions';
import types from '../creditCard.constants';
import creditCardsApi from '../../api/creditCards.api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../api/creditCards.api');

describe('Credit Card Actions', () => {
  it('should emit GET_CREDIT_CARDS_SUCCESS action when fetching credit cards has been done', () => {
    const expectedActions = [
      { type: types.GET_CREDIT_CARDS_REQUEST },
      {
        payload: [
          {
            id: 'testId',
            name: 'muhammad rizwan',
            cardNumber: '41111111111111111',
            limit: 12,
          },
        ],
        type: types.GET_CREDIT_CARDS_SUCCESS,
      },
    ];

    creditCardsApi.fetchAll.mockResolvedValue(expectedActions[1].payload);
    const store = mockStore({});
    return store.dispatch(actions.getCreditCards()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should emit GET_CREDIT_CARDS_ERROR action when fetching daily notes has errored', () => {
    const expectedActions = [
      { type: types.GET_CREDIT_CARDS_REQUEST },
      {
        errors: [{ message: 'some error' }],
        type: types.GET_CREDIT_CARDS_ERROR,
      },
    ];

    creditCardsApi.fetchAll.mockRejectedValue(expectedActions[1].errors);
    const store = mockStore({});
    return store.dispatch(actions.getCreditCards()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should emit CREATE_CREDIT_CARD_SUCCESS action when updating daily notes has been done', () => {
    const expectedActions = [
      { type: types.CREATE_CREDIT_CARD_REQUEST },
      {
        payload: {
          id: 'testId',
          name: 'muhammad rizwan',
          cardNumber: '41111111111111111',
          limit: 12,
        },
        type: types.CREATE_CREDIT_CARD_SUCCESS,
      },
    ];

    creditCardsApi.add.mockResolvedValue(expectedActions[1].payload);
    const store = mockStore({});
    return store
      .dispatch(actions.createCreditCards(expectedActions[1].payload))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
