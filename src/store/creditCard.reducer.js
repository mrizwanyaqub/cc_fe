import ACTION_TYPES from './creditCard.constants';

export const initialState = {
  attempting: false,
  errors: [],
  list: [],
  form: {},
};

export default function creditCards(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_CREDIT_CARDS_REQUEST:
      return {
        ...state,
        attempting: true,
      };
    case ACTION_TYPES.GET_CREDIT_CARDS_SUCCESS:
      return {
        ...state,
        errors: [],
        attempting: false,
        list: action.payload,
      };
    case ACTION_TYPES.GET_CREDIT_CARDS_ERROR:
      return {
        ...state,
        attempting: false,
        errors: action.errors,
      };
    case ACTION_TYPES.SET_CREDIT_CARDS_FORM_STATE:
      return {
        ...state,
        attempting: false,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case ACTION_TYPES.CREATE_CREDIT_CARD_REQUEST:
      return {
        ...state,
        attempting: true,
      };
    case ACTION_TYPES.CREATE_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        errors: [],
        attempting: false,
        form: {},
        list: [...state.list, action.payload],
      };
    case ACTION_TYPES.CREATE_CREDIT_CARD_ERROR:
      return {
        ...state,
        attempting: false,
        errors: action.errors,
      };
    default:
      return state;
  }
}
