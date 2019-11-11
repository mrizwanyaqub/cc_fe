import reducer, {
  initialState as defaultInitialState,
} from '../dailynotes.reducer';
import types from '../dailynotes.constants';

const dailyNotePayload = { id: 'testId', content: 'testContent' };

describe('Daily Notes Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(defaultInitialState, {})).toEqual(defaultInitialState);
  });

  it('should handle GET_DAILY_NOTES_REQUEST', () => {
    const initialState = {
      attempting: false,
    };

    expect(
      reducer(initialState, {
        type: types.GET_DAILY_NOTES_REQUEST,
      })
    ).toEqual({
      attempting: true,
    });
  });

  it('should handle GET_DAILY_NOTES_SUCCESS', () => {
    const initialState = {
      attempting: true,
      error: 'some error',
    };

    expect(
      reducer(initialState, {
        type: types.GET_DAILY_NOTES_SUCCESS,
        payload: dailyNotePayload,
      })
    ).toEqual({
      attempting: false,
      error: null,
      ...dailyNotePayload,
    });
  });

  it('should handle GET_DAILY_NOTES_ERROR', () => {
    const initialState = {
      attempting: true,
      error: null,
    };

    const error = { message: 'some error' };

    expect(
      reducer(initialState, {
        type: types.GET_DAILY_NOTES_ERROR,
        error,
      })
    ).toEqual({
      attempting: false,
      error: error.message,
    });
  });

  it('should handle UPDATE_DAILY_NOTES_REQUEST', () => {
    const initialState = {
      edit: {
        attempting: false,
      },
    };

    expect(
      reducer(initialState, {
        type: types.UPDATE_DAILY_NOTES_REQUEST,
      })
    ).toEqual({
      edit: {
        attempting: true,
      },
    });
  });

  it('should handle UPDATE_DAILY_NOTES_SUCCESS', () => {
    const initialState = {
      edit: {
        attempting: true,
        error: 'some error',
      },
    };

    expect(
      reducer(initialState, {
        type: types.UPDATE_DAILY_NOTES_SUCCESS,
        payload: dailyNotePayload,
      })
    ).toEqual({
      edit: { attempting: false, error: null },
      ...dailyNotePayload,
    });
  });

  it('should handle UPDATE_DAILY_NOTES_ERROR', () => {
    const initialState = {
      edit: {
        attempting: true,
        error: null,
      },
    };

    const error = { message: 'some error' };

    expect(
      reducer(initialState, {
        type: types.UPDATE_DAILY_NOTES_ERROR,
        error,
      })
    ).toEqual({
      edit: {
        attempting: false,
        error: error.message,
      },
    });
  });
});
