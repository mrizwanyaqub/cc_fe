import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, createTransform } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import creditCards from './creditCard.reducer';

const reservationsFilter = createTransform(
  inboundState => ({
    ...inboundState,
    timestamp: undefined,
    edit: undefined,
  }),
  outboundState => outboundState,
  { whitelist: ['reservations'] }
);

export default () => {
  const appReducer = combineReducers({
    creditCards,
  });
  const rootReducer = (state, action) => appReducer(state, action);

  return persistReducer(
    {
      key: 'credit_card',
      storage,
      version: 1,
      stateReconciler: autoMergeLevel2,
      transforms: [reservationsFilter],
    },
    rootReducer
  );
};
