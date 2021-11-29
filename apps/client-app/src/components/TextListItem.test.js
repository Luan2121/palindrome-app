import { render, fireEvent } from '@testing-library/react';
import TextListItem from './TextListItem';

const textItemWithError = {
    text: 'test',
    isLoading: false,
    error: {
        text: 'No text'
    },
    reversed: 'tset',
    palindrome: false
}

const textItemLoading = {
    text: 'test',
    isLoading: true,
    error: null,
    reversed: 'tset',
    palindrome: false
}

const textItemPalindrome = {
    text: 'oso',
    isLoading: false,
    error: null,
    reversed: 'oso',
    palindrome: true
}

describe('TextListItem Component', () => {

    test('it should have placeholder if text item is loading', () => {
        const { getByTestId } = render(<TextListItem text = {textItemLoading} />);
        const placeholder = getByTestId('placeholder');
        expect(placeholder).toBeInTheDocument();
    })

    test('it should have danger badge in case of text item error', () => {
        const { getByText } = render(<TextListItem text = {textItemWithError} />);
        const badge = getByText('Upss! there was an error checking this word');
        expect(badge).toBeInTheDocument();
        expect(badge.classList).toContain('bg-danger');
    })


    test('it should have success badge in case of text being palindrome and no errors', () => {
        const { getByText } = render(<TextListItem text = {textItemPalindrome} />);
        const badge = getByText('Cool! This word is a palindrome');
        expect(badge).toBeInTheDocument();
        expect(badge.classList).toContain('bg-success');
    })
})