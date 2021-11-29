import { render } from '@testing-library/react';
import EmptySpace from './EmptySpace'

describe('EmptySpace Component', () => {
    const title = 'This is an empty space';
    const feedback = 'Try wrinting anything';

    test('it should render empty space feedback if show is true', () => {
        const { getByText } = render(<EmptySpace 
            show = {true}  
            title = {title}
            feedback = {feedback}
        />)
    
        expect( getByText(title) ).toBeInTheDocument();
        expect( getByText(feedback) ).toBeInTheDocument();
    })

    test('it should render child if show is false', () => {
        const { getByRole, getByText } = render(
            <EmptySpace
                show = {false}
                title = {title}
                feedback = {feedback}
            >
                <button> Send </button>
            </EmptySpace>
        );

        expect( getByRole('button') ).toBeInTheDocument();
    })
    
})