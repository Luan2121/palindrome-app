import { getUniqueID, checkPalindrome } from "../../utils";

// Actions 
const ADD_NEW_TEXT = 'ADD_NEW_TEXT';
const ADD_NEW_TEXT_SUCCEED = 'ADD_NEW_TEXT_SUCCED';
const ADD_NEW_TEXT_FAILED = 'ADD_NEW_TEXT_FAILED';

// Actions Creator
export const addNewTextSuccess = (payload) => {
    return {
        type: ADD_NEW_TEXT_SUCCEED,
        payload
    }
}

export const addNewTextFailed = (payload) => {
    return {
        type: ADD_NEW_TEXT_FAILED,
        payload
    }
}

export const addNewText = (text) => {
    return async (dispatch) => {
        const id = getUniqueID();
        dispatch({ type: ADD_NEW_TEXT , payload: { text, id } });
        try {
            const { palindrome, text : reversedText } = await checkPalindrome(text);
            dispatch( addNewTextSuccess({ text, id, palindrome, reversed: reversedText }) )
        }catch(error){
            dispatch( addNewTextFailed({ text, id, error }) )
        }
    }
}   

const initialState = {
    texts: []
}

// Reducer
const palindromeReducer = function (state = initialState, action){
    const { type , payload } = action;

    switch(type){
        case ADD_NEW_TEXT:
            const newText = {
                ...payload,
                isLoading: true,
                error: null
            }
            return {
                ...state,
                texts: [...state.texts,newText]
            }
        case ADD_NEW_TEXT_FAILED:
        case ADD_NEW_TEXT_SUCCEED: 
            return {
                ...state,
                texts: state.texts.map( text => {
                    if( text.id === payload.id ){
                        const { error, ...restPayload } = payload
                        return { 
                            ...restPayload, 
                            isLoading: false, 
                            error: error || null 
                        };
                    }
                    return text;
                })
            }
        default:
            return {...state}
    }
}

export default palindromeReducer;