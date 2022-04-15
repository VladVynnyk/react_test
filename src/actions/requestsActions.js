import axios from "axios";
import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    POSITIONS_REQUEST,
    POSITIONS_SUCCESS,
    POSITIONS_FAIL
} from "../constants/requestsConstants";

export const userListAction = (page) => async (dispatch) => {
    try {
        dispatch({type: USER_LIST_REQUEST})
        const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            params:{
                page:page,
                count:6
            }
        })/*.then(response => console.log("response", response))*/
        if(data.success) { console.log("Request was successful")}// process success response }
            else { console.log("error")}// proccess server errors } }
        dispatch({type: USER_LIST_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({type:USER_LIST_FAIL, payload: {error: 'ERROR'} })
    }
}

export const positionsAction = () => async (dispatch) => {
    try {
        dispatch({type: POSITIONS_REQUEST})
        const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')/*.then(response => console.log("response", response))*/
        if(data.success) { console.log("Request was successful")}// process success response }
            else { console.log("error")}// proccess server errors } }
        dispatch({type:POSITIONS_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({type:POSITIONS_FAIL, payload: {error: 'ERROR'}})
    }
}

