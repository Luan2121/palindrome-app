import { Row, Col } from 'react-bootstrap';
import EmptySpace from './EmptySpace';
import TextListItem from './TextListItem';

const TextsList = ({ texts }) => {
    return (
        <Row className = "justify-content-center">
            <EmptySpace
                show = {!texts?.length}
                title = {`It looks like you haven't used the app`}
                feedback = {`Try it wrinting a text like: Was it a car or a cat I saw.`}
            >
                <Col md = {8} sm = {12}>
                    <ul>
                        {texts.map( text => (
                            <TextListItem text = {text} key = {text.id} />
                        ))}
                    </ul>
                </Col>
            </EmptySpace>
        </Row>
    )
}

export default TextsList;