import { Container } from 'react-bootstrap';
// components
import TextForm from './TextForm';
// hooks
import { usePalindromeActions } from '../hooks/palindromes';

const Navbar = () => {
    const { addNewText } = usePalindromeActions();

    const handleSubmit = (event,{text}) => {
        event.preventDefault();
        addNewText(text);    
    }

    return (
        <Container 
            fluid 
            className = "bg-secondary p-4 d-flex justify-content-center m-0"
        > 
            <TextForm onSubmit = {handleSubmit} />
        </Container>
    )
}

export default Navbar;