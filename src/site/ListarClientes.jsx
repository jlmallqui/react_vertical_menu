

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

export const ListarClientes = () => {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const registro = () =>{
      console.log('Se registro');
      handleClose();
  };

  const [clientes, setclientes] = useState([])

  
  // useEffect(() => {
  //   fetch(
  //     "https://jsonplaceholder.typicode.com/users")
  //             .then((res) => res.json())
  //             .then((json) => {
  //                 setclientes(json) 
  //                 });
              
  
     
  // }, [ ])
  
  
 







  return (
    <>

      <div className = "App">
            <h1> Listado de clientes </h1> 
            <h1>  </h1> 
            <Button variant="primary" onClick={handleShow}>
              Crear
          </Button> 
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Direccion</th>
                </tr>
              </thead>
              <tbody>

            {
                clientes.map((item) => ( 
                  <tr  key = { item.id }>
                  <td>{item.id }</td>
                  <td>{ item.name }</td>
                  <td> { item.email }</td>
                  <td> {item.address.street} {item.address.suite} , { item.address.city}</td>
                </tr>
 
                ))
            }
          </tbody>
        </Table>
        </div>
  


      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={registro}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

 