import {Modal, Stack, Form, Button} from "react-bootstrap";
import  añadirProducto from '../functions/añadirProducto'; 

function modalAñadir({isModalAñadir, setIsModalAñadir, actualizarEstadoProductos}) {

    function añadirProductoModal() {

        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;
        const serialNumber = document.getElementById("serialNumber").value;
        const hdd = document.getElementById("hdd").value;
        const ram = document.getElementById("ram").value;
        const processor = document.getElementById("processor").value;
        const cpCode = document.getElementById("cpCode").value;
        const condition = document.getElementById("condition").value;
        const details = document.getElementById("details").value;
        const location = document.getElementById("location").value;

        const infoProducto = { brand, model, serialNumber, hdd, ram, processor, cpCode, condition, details, location};
        añadirProducto(infoProducto);
        actualizarEstadoProductos();
        setIsModalAñadir(false);

    }


  return <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>


    <Modal.Header>
        <Modal.Title>Add new item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Stack>
                <Form.Control id="brand" placeholder="Brand" type="text" className="mb-1"></Form.Control>
                <Form.Control id="model" placeholder="Model" type="text" className="mb-1"></Form.Control>
                <Form.Control id="serialNumber" placeholder="Serial Number" type="text" className="mb-1"></Form.Control>
                <Form.Control id="hdd" placeholder="HDD/SSD" type="text" className="mb-1"></Form.Control>
                <Form.Control id="ram" placeholder="ram" type="text" className="mb-1"></Form.Control>
                <Form.Control id="processor" placeholder="Processor" type="text" className="mb-1"></Form.Control>
                <Form.Control id="cpCode" placeholder="CP Code" type="text" className="mb-1"></Form.Control>
                <Form.Control id="condition" placeholder="Condition" type="text" className="mb-1"></Form.Control>
                <Form.Control id="details" placeholder="Details" type="text" className="mb-1"></Form.Control>
                <Form.Control id="location" placeholder="Location" type="text" className="mb-1"></Form.Control>
            </Stack>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={()=> setIsModalAñadir(false)}>Cancel</Button>
        <Button variant="primary" onClick={añadirProductoModal}>Save</Button>
    </Modal.Footer>
  </Modal>
  
}

export default modalAñadir;