import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../dailynotes.actions';
import types from '../dailynotes.constants';
import * as API from '../../api/dailynotes.api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../api/dailynotes.api');

describe('Daily Notes Actions', () => {
  it('should emit GET_DAILY_NOTES_SUCCESS action when fetching daily notes has been done', () => {
    const expectedActions = [
      { type: types.GET_DAILY_NOTES_REQUEST },
      {
        payload: { id: 'testId', content: 'testContent' },
        type: types.GET_DAILY_NOTES_SUCCESS,
      },
    ];

    API.getDailyNotes.mockResolvedValue([expectedActions[1].payload]);
    const store = mockStore({});
    return store.dispatch(actions.getDailyNotes('20170418')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(
    'should emit GET_DAILY_NOTES_SUCCESS action with empty daily note when ' +
      'fetching daily notes has been done and returned empty array',
    () => {
      const expectedActions = [
        { type: types.GET_DAILY_NOTES_REQUEST },
        {
          payload: { id: '', content: '' },
          type: types.GET_DAILY_NOTES_SUCCESS,
        },
      ];

      API.getDailyNotes.mockResolvedValue([]);
      const store = mockStore({});
      return store.dispatch(actions.getDailyNotes('20170418')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    }
  );

  it('should emit GET_DAILY_NOTES_ERROR action when fetching daily notes has errored', () => {
    const expectedActions = [
      { type: types.GET_DAILY_NOTES_REQUEST },
      {
        error: 'some error',
        type: types.GET_DAILY_NOTES_ERROR,
      },
    ];

    API.getDailyNotes.mockRejectedValue(expectedActions[1].error);
    const store = mockStore({});
    return store.dispatch(actions.getDailyNotes('20170418')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should emit UPDATE_DAILY_NOTES_SUCCESS action when updating daily notes has been done', () => {
    const expectedActions = [
      { type: types.UPDATE_DAILY_NOTES_REQUEST },
      {
        payload: { id: 'testId', content: 'testContent' },
        type: types.UPDATE_DAILY_NOTES_SUCCESS,
      },
    ];

    API.updateDailyNotes.mockResolvedValue(expectedActions[1].payload);
    const store = mockStore({
      dailyNotes: {
        id: expectedActions[1].payload.id,
      },
      reservations: {
        timestamp: 89393823,
      },
    });
    return store
      .dispatch(actions.updateDailyNotes(expectedActions[1].payload.content))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should emit UPDATE_DAILY_NOTES_SUCCESS action when creating daily notes has been done', () => {
    const expectedActions = [
      { type: types.UPDATE_DAILY_NOTES_REQUEST },
      {
        payload: { id: 'testId', content: 'testContent' },
        type: types.UPDATE_DAILY_NOTES_SUCCESS,
      },
    ];

    API.createDailyNotes.mockResolvedValue(expectedActions[1].payload);
    const store = mockStore({
      dailyNotes: {
        id: '',
      },
      reservations: {
        timestamp: 89393823,
      },
    });
    return store
      .dispatch(actions.updateDailyNotes(expectedActions[1].payload.content))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it(
    'should emit UPDATE_DAILY_NOTES_SUCCESS action with an empty daily note' +
      ' when deleting daily notes has been done',
    () => {
      const expectedActions = [
        { type: types.UPDATE_DAILY_NOTES_REQUEST },
        {
          payload: { id: '', content: '' },
          type: types.UPDATE_DAILY_NOTES_SUCCESS,
        },
      ];

      API.deleteDailyNotes.mockResolvedValue(null);
      const store = mockStore({
        dailyNotes: {
          id: 'testId',
        },
        reservations: {
          timestamp: 89393823,
        },
      });
      return store
        .dispatch(actions.updateDailyNotes(expectedActions[1].payload.content))
        .then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectedActions);
        });
    }
  );

  it('should emit UPDATE_DAILY_NOTES_ERROR action when updating daily notes has errored', () => {
    const expectedActions = [
      { type: types.UPDATE_DAILY_NOTES_REQUEST },
      {
        error: 'some error',
        type: types.UPDATE_DAILY_NOTES_ERROR,
      },
    ];

    API.updateDailyNotes.mockRejectedValue(expectedActions[1].error);
    const store = mockStore({
      dailyNotes: {
        id: 'testId',
      },
      reservations: {
        timestamp: 89393823,
      },
    });
    return store.dispatch(actions.updateDailyNotes('content')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
