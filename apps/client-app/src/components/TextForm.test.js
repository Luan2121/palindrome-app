import { render, fireEvent } from '@testing-library/react';
import TextForm from './TextForm'

describe('Form Component', () => {

    test('should render correctly', () => {
        const { asFragment } = render(<TextForm />);
        expect( asFragment() ).toMatchSnapshot();
    })

    test('it should have button disabled if input has no text', () => {
        const { getByRole } = render(<TextForm />)
        const button = getByRole('button');
        expect(button).toBeDisabled();
    })

    test('it should have button enabled if input has text', () => {
        const { getByRole, getByPlaceholderText } = render(<TextForm />);
        const input = getByPlaceholderText('Insert Text')
        const button = getByRole('button');

        fireEvent.change(input, { target: { value: 'Test' } });
        
        expect(button).not.toBeDisabled();
    })
    
})