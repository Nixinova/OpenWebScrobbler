import {
  SETTINGS_UPDATE,
  SETTINGS_MODAL_OPEN,
  SETTINGS_MODAL_CLOSE,
  SETTINGS_SET_DATA_PROVIDER,
  USER_LOGGED_OUT,
  PROVIDER_DISCOGS,
} from 'Constants';

const initialState = {
  lang: 'auto',
  use12Hours: false,
  catchPaste: true,
  showTrackNumbers: false,
  isDonor: false,
  keepOriginalTimestamp: true,
  modalIsOpen: false,
  dataProvider: PROVIDER_DISCOGS,
  settingsLoaded: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE:
      return {
        ...initialState,
        ...state,
        ...action.payload,
        use12Hours: !!action.payload.use12Hours,
        catchPaste: !!action.payload.catchPaste,
        showTrackNumbers: !!action.payload.showTrackNumbers,
        isDonor: !!action.payload.isDonor,
        settingsLoaded: true,
      };

    case SETTINGS_MODAL_OPEN:
      return {
        ...state,
        modalIsOpen: true,
      };

    case SETTINGS_MODAL_CLOSE:
      return {
        ...state,
        modalIsOpen: false,
      };

    case USER_LOGGED_OUT:
      return {
        ...initialState,
        lang: state.lang,
      };

    case SETTINGS_SET_DATA_PROVIDER:
      return {
        ...state,
        dataProvider: action.payload,
      };

    default:
      return state;
  }
};

export default settingsReducer;
