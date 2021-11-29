import { Container } from 'react-bootstrap';
// components
import TextsList from './TextsList';
// hooks
import { usePalindromes } from '../hooks/palindromes';

const Results = () => {
    const { texts } = usePalindromes();
    return (
        <Container as = "main" className = "p-5">
            <div className = "p-4 bg-body w-100">
                <h2 className = "mb-4 d-block">
                    Results: 
                </h2>
                <TextsList texts = {texts} />
            </div>
        </Container>
    );
}

export default Results;