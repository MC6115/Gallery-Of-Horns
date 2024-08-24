import { Button, Modal, Card } from 'react-bootstrap';

function SelectBeast(props) {
    return (
        <Modal show={props.show} onHide={props.cerrarModal}>
            <Modal.Dialog>
                <Modal.Header closeButton > 
                    <Modal.Title>{props.selectedBeast.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card style={{ width: '18rem' }} onClick={props.mostrarModal}>
                        <Card.Img variant="top" src={props.selectedBeast.image_url} alt={props.selectedBeast.title} />
                        <Card.Body>
                            <Card.Title>{props.selectedBeast.title}</Card.Title>
                            <Card.Text>{props.selectedBeast.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    
                    <Button onClick={props.cerrarModal} variant="primary">close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default SelectBeast