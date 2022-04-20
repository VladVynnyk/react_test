import axios from "axios";
import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    POSITIONS_REQUEST,
    POSITIONS_SUCCESS,
    POSITIONS_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL
} from "../constants/requestsConstants";

export const userListAction = (page) => async (dispatch) => {
    try {
        dispatch({type: USER_LIST_REQUEST})
        const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            params:{
                page:page,
                count:6
            }
        })
        if(data.success) { console.log("Request was successful")}
            else { console.log("error")}
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

export const registerAction = (name, email, phone, positionId, photo, token) => async (dispatch)=>{
    try {
        dispatch({type: REGISTER_REQUEST})
        let formData = new FormData();
        formData.append('position_id', positionId);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', photo);
        const {data} = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {method: 'POST', body: formData, headers: {'Token': token,},})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) { // process success response
                } else { // proccess server errors
                }
            }).catch(function (error) { /*proccess network errors*/
        });
        dispatch({type: REGISTER_SUCCESS, payload: data, token: token.data.token})
    }
    catch(error){
        dispatch({
            type: REGISTER_FAIL,
            payload: {error: 'ERROR'},
            })
        }
}

