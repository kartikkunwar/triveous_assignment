import * as types from "./actionTypes"

const initialState={
    newsData:[],
    favourite:[],
    toggle:1
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action

    switch(type){
        case types.GET_SUCCESS_NEWS:
            return{
                ...state,
                newsData:payload
            }
        case types.GET_SUCCESS_TOGGLE:
            return{
                ...state,
                toggle:state.toggle+1
            }
        case types.GET_SUCCESS_FAV:
            return{
                ...state,
                favourite:[...state.favourite,payload]
            }
        default:
            return state;
    }
}