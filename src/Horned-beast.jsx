import { useState } from "react";

import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [contador,setContador]=useState(0);
    
    function favoritos(info){
        setContador(contador+1);
        props.mostrarModal(info);
    }
    return (
        <>
            <br />
            <Card style={{ width: '18rem' }} onClick={()=>{ favoritos(props.beast) }} >
                <Card.Img variant="top" src={props.beast.image_url} alt={props.beast.title} />
                <Card.Body>
                    <Card.Title>{props.beast.title}</Card.Title>
                    <Card.Text>
                        {props.beast.description}
                        <br />
                        Numero de cuernos: {props.beast.horns}
                        <br/>
                        Fav - {contador}
                    </Card.Text>

                </Card.Body>
            </Card>
            <br />
        </>
    );
}

export default HornedBeast;
{/*}
<Button onClick={(e) => {
                        e.stopPropagation(); 
                        favorite();
                    }}>
                    </Button>
                    */}