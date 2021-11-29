
const EmptySpace = ({ show , children, feedback, title }) => {

    if(show){
        return (
            <div className = "text-center">
                <h3>
                    {title || "Empty Space"}
                </h3>   
                {feedback && (
                    <p>
                        {feedback}
                    </p>
                )}
            </div>
        )
    }

    return children;

}

export default EmptySpace;