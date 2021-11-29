import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as palindromeActions from '../redux/ducks/palindrome';

const usePalindromes = () => {
    return useSelector( state => state.palindrome );
}

const usePalindromeActions = () => {
    const dispatch = useDispatch();

    const addNewText = useCallback( (text) => {
        dispatch( palindromeActions.addNewText( text ) )
    } , [dispatch] );

    return { addNewText };
}

export { usePalindromes, usePalindromeActions }