import { useState } from "react"
// import {Card,Button} from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [Clicks, setClicks] = useState(0);
    function favorite(){
        setClicks(Clicks + 1);
    }
    return (
        <>
            {/* <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.imageURL} style={{ width: '30%' }} />
            <p>Numero de cuernos: {props.horns} </p>
            <br></br>
            <button onClick={favorite}>Fav - {Clicks}</button> */}
            <br></br>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={props.imageURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {/* <img src={props.imageURL} style={{ width: '30%' }} /> */}
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Button onClick={favorite}>Fav - {Clicks}</Button>
                </Card.Body>
            </Card>
            <br></br>
        </>
    );
}

export default HornedBeast