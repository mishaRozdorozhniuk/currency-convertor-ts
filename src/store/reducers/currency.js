import * as actions from '../actionTypes';

const initialState = []

export default (state= initialState, action) => {
    switch (action.type) {
        case actions.SAVE_CURRENCY:
            let {payload} = action
            return {
                ...state,
                currency: payload
            }
        default:
            return state
    }
}