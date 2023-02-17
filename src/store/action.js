import * as actions from './actionTypes';

export const saveCurrency = currency => ({
    type: actions.SAVE_CURRENCY,
    payload: currency
});

export const errorRequestMessage = error => ({
    type: actions.ERROR_REQUEST_MESSAGE,
    payload: error
});

