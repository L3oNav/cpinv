import React from "react";

import {Modal, Stack, Form, Button, Col, Row} from "react-bootstrap";
import  añadirProducto from '../functions/añadirProducto'; 

function ModalEditar({
    isModalEditar, 
    setIsModalEditar, 
    actualizarEstadoProductos,
    productoEditar,
    setProductoEditar
 }) {

    function editarProductoModal() {

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
        setProductoEditar(null);
        actualizarEstadoProductos();
        setIsModalEditar(false);

    }

    const [productoEstado, setProductoEstado] = React.useState({...productoEditar,});


  return <Modal show={isModalEditar} onHide={() => {
    setIsModalEditar(false);
    setProductoEditar(null);
  }
    }>


    <Modal.Header>
        <Modal.Title>Edit device</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Stack>
                <Form.Group as={Row} className="mb=3">
                    <Form.Label column sm="2">Brand</Form.Label>
                    <Col sm="10">
                    <Form.Control id="brand" value={productoEstado.brand} onChange={(e)=> setProductoEstado ({...productoEstado, brand: e.target.value, })} placeholder="Brand" type="text" className="mb-1"></Form.Control>    
                    </Col>
                </Form.Group>
                <Form.Control id="model" value={productoEstado.model} onChange={(e)=> setProductoEstado ({...productoEstado, model: e.target.value, })} placeholder="Model" type="text" className="mb-1"></Form.Control>
                <Form.Control id="serialNumber" value={productoEstado.serialNumber} onChange={(e)=> setProductoEstado ({...productoEstado, serialNumber: e.target.value, })} placeholder="Serial Number" type="text" className="mb-1"></Form.Control>
                <Form.Control id="hdd" value={productoEstado.hdd} onChange={(e)=> setProductoEstado ({...productoEstado, hdd: e.target.value, })} placeholder="HDD/SSD" type="text" className="mb-1"></Form.Control>
                <Form.Control id="ram" value={productoEstado.ram} onChange={(e)=> setProductoEstado ({...productoEstado, ram: e.target.value, })} placeholder="ram" type="text" className="mb-1"></Form.Control>
                <Form.Control id="processor" value={productoEstado.processor} onChange={(e)=> setProductoEstado ({...productoEstado, processor: e.target.value, })} placeholder="Processor" type="text" className="mb-1"></Form.Control>
                <Form.Control id="cpCode" disabled="true" value={productoEstado.cpCode} onChange={(e)=> setProductoEstado ({...productoEstado, cpCode: e.target.value, })} placeholder="CP Code" type="text" className="mb-1"></Form.Control>
                <Form.Control id="condition" value={productoEstado.condition} onChange={(e)=> setProductoEstado ({...productoEstado, condition: e.target.value, })} placeholder="Condition" type="text" className="mb-1"></Form.Control>
                <Form.Control id="details" value={productoEstado.details} onChange={(e)=> setProductoEstado ({...productoEstado, details: e.target.value, })} placeholder="Details" type="text" className="mb-1"></Form.Control>
                <Form.Control id="location" value={productoEstado.location} onChange={(e)=> setProductoEstado ({...productoEstado, location: e.target.value, })} placeholder="Location" type="text" className="mb-1"></Form.Control>
            </Stack>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={()=> { setIsModalEditar(false); setProductoEditar(null); }}>Cancel</Button>
        <Button variant="primary" onClick={editarProductoModal}>Edit</Button>
    </Modal.Footer>
  </Modal>
  
}

export default ModalEditar;