import actionTypes from './action-types';

const actions = {
  switchLanguage(language) {
    return {
      type: actionTypes.SWITCH_LANGUAGE,
      language,
    };
  },
};

export default actions;
