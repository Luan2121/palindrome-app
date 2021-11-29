import TextsList from './TextsList';
import { renderWithProviders } from '../utils/renderWithProviders';
import { render } from '@testing-library/react';

describe('TextsListItem Component', () => {

    const texts = [
        { id: 123, isLoading: false, text: 'test', error: null, reversed: 'tset', palindrome: false },
        { id: 345, isLoading: false, text: 'oso', error: null, reversed: 'oso', palindrome: true },
        { id: 789, isLoading: true,  text: 'lion', error: null }
    ]

    test('it should render empty space if there are no texts', () => {
        const { getByText } = renderWithProviders(<TextsList texts = {[]} />);
        expect( getByText(`It looks like you haven't used the app`) ).toBeInTheDocument();
    })

    test('it should render an unordered list of text item tf there are texts', () => {
        const { queryAllByRole } = render(<TextsList texts = {texts} />)
        const list = queryAllByRole('list');
        const listsItem = queryAllByRole('listitem');
        expect( list.length ).toBe(1);
        expect( listsItem.length ).toBe(3);
    })  
    
})

