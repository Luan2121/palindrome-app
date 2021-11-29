import { Row, Col } from 'react-bootstrap';
import TextListItem from './TextListItem';

const TextsList = ({ texts }) => {
    return (
        <Row className = "justify-content-center">
            <Col md = {8} sm = {12}>
                <ul>
                    {texts.map( text => (
                        <TextListItem text = {text} key = {text.id} />
                    ))}
                </ul>
            </Col>
        </Row>
    )
}

export default TextsList;