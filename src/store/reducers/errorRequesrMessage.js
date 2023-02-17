import * as actions from '../actionTypes';

const initialState = ''

export default (state= initialState, action) => {
    switch (action.type) {
        case actions.ERROR_REQUEST_MESSAGE:
            let {payload} = action
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}