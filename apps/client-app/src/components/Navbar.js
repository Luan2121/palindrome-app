import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Container as = {Row} fluid className = "bg-secondary p-4 justify-content-center m-0"> 
            <Form as =  {Col} md = "6" className = "d-flex">
                <Form.Group className = "me-3 w-100">
                    <Form.Control placeholder = "Insert Text" />
                </Form.Group>
                <Button type = "submit">
                    Send
                </Button>
            </Form>
        </Container>
    )
}

export default Navbar;