import * as actions from './actionTypes';

export const saveCurrency = currency => ({
    type: actions.SAVE_CURRENCY,
    payload: currency
});
