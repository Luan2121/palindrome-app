import { client } from './apiClient';

const checkPalindrome = (text) => {
    const params = { text };
    return client(`iecho?${ new URLSearchParams(params).toString()}`,{});
}

export { checkPalindrome }