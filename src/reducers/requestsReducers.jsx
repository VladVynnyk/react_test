import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    POSITIONS_REQUEST,
    POSITIONS_SUCCESS,
    POSITIONS_FAIL
} from "../constants/requestsConstants";

export const userListReducer = (state = {users:[]}, action) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return {loading:true, users:[]}
        case USER_LIST_SUCCESS:
            return {loading: false, users: action.payload.users, success: action.payload.success}
        case USER_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const positionsReducer = (state={positions:[]}, action) => {
    switch(action.type){
        case POSITIONS_REQUEST:
            return {loading: true, positions:[]}
        case POSITIONS_SUCCESS:
            return {loading: false, positions: action.payload.positions, success: action.payload.success}
        case POSITIONS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}