
function HornedBeast(props){
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src = {props.imageURL} style={{width:'30%'}}/>
        </>
    );
}

export default HornedBeast