import reducer, {
  initialState as defaultInitialState,
} from '../creditCard.reducer';
import types from '../creditCard.constants';

const creditCardPayload = {
  id: 'testId',
  name: 'muhammad rizwan',
  cardNumber: '41111111111111111',
  limit: 12,
};

describe('Credit Card Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(defaultInitialState, {})).toEqual(defaultInitialState);
  });

  it('should handle GET_CREDIT_CARDS_REQUEST', () => {
    const initialState = {
      attempting: false,
    };

    expect(
      reducer(initialState, {
        type: types.GET_CREDIT_CARDS_REQUEST,
      })
    ).toEqual({
      attempting: true,
    });
  });

  it('should handle GET_CREDIT_CARDS_SUCCESS', () => {
    const initialState = {
      attempting: true,
      errors: [{message: 'some error'}],
      list: [],
    };

    expect(
      reducer(initialState, {
        type: types.GET_CREDIT_CARDS_SUCCESS,
        payload: [creditCardPayload],
      })
    ).toEqual({
      attempting: false,
      errors: [],
      list: [creditCardPayload],
    });
  });

  it('should handle GET_CREDIT_CARDS_ERROR', () => {
    const initialState = {
      attempting: true,
      errors: [],
    };

    const errors = [{ message: 'some error' }];
    expect(
      reducer(initialState, {
        type: types.GET_CREDIT_CARDS_ERROR,
        errors,
      })
    ).toEqual({
      attempting: false,
      errors,
    });
  });

  it('should handle CREATE_CREDIT_CARD_REQUEST', () => {
    const initialState = {
      attempting: false,
    };

    expect(
      reducer(initialState, {
        type: types.CREATE_CREDIT_CARD_REQUEST,
      })
    ).toEqual({
      attempting: true,
    });
  });

  it('should handle CREATE_CREDIT_CARD_SUCCESS', () => {
    const initialState = {
      attempting: true,
      errors: [{message: 'some error'}],
      list: [],
      form: {},
    };

    expect(
      reducer(initialState, {
        type: types.CREATE_CREDIT_CARD_SUCCESS,
        payload: creditCardPayload,
      })
    ).toEqual({
      attempting: false,
      errors: [],
      list: [creditCardPayload],
      form: {},
    });
  });

  it('should handle CREATE_CREDIT_CARD_ERROR', () => {
    const initialState = {
      attempting: true,
      errors: null,
    };

    const errors = [{message: 'some error'}];
    expect(
      reducer(initialState, {
        type: types.CREATE_CREDIT_CARD_ERROR,
        errors,
      })
    ).toEqual({
      attempting: false,
      errors,
    });
  });
});
