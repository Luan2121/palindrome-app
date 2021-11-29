import { useState } from 'react';
import { Row, Form, Button, Col } from 'react-bootstrap';

const TextForm = ({ 
    onSubmit
}) => {

    const [text,setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        if(typeof onSubmit === 'function'){
            onSubmit(event,{text});
        }
        setText("");
    }

    return (
        <Row md = "6" className = "justify-content-center w-100">
            <Col as =  {Form} md = "6" className = "d-flex" onSubmit = {handleSubmit}>
                <Form.Group className = "me-3 w-100">
                    <Form.Control 
                        placeholder = "Insert Text" 
                        value = {text} 
                        onChange = {handleChange} 
                    />
                </Form.Group>
                <Button type = "submit" disabled = {!text}>
                    Send
                </Button>
            </Col>
        </Row>
    )
}

export default TextForm;