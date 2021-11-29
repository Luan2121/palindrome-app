import { Card, Placeholder, Badge, Fade } from 'react-bootstrap';

const TextListItem = ({ text }) => {
    return (
        <Fade appear = {true} in = {true}>
            <Card as = "li" className = "p-4 mb-5"  >
                <Card.Title>
                    Texto: {text.text}
                    {(() => {
                        if(text.isLoading){
                            return null; 
                        }

                        if(text.error){
                            return (
                                <Badge bg = "danger" className = "ms-2">
                                    Upss! there was an error checking this word
                                </Badge>
                            )
                        }

                        if(text.palindrome){
                            return (
                                <Badge bg = "success" className = "ms-2">
                                    Cool! This word is a palindrome
                                </Badge>
                            )
                        }

                        return (
                            <Badge bg = "warning" className = "ms-2">
                                This word is not a palindrome 
                            </Badge>
                        )
                    })()}
                </Card.Title>
                {text.isLoading ? (
                    <Card.Subtitle as = {Placeholder} animation = "glow" data-testid = "placeholder">
                        <Placeholder xs={6} />
                    </Card.Subtitle>
                ) : (
                    <Card.Subtitle className = "mt-2">
                        Reversed Text: { text.error ? "🤯 not found 🤯" : text.reversed}
                    </Card.Subtitle>
                )}
            </Card>
        </Fade>
    )
}

export default TextListItem;