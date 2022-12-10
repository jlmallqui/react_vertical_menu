

  import Button from 'react-bootstrap/Button';
  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import Row from 'react-bootstrap/Row';
  import {NavBar} from '../components/menu/navBar'
  import React, { useState } from 'react'
  import Alert  from 'react-bootstrap/Alert' 
  import {ListarClientes} from '../site/ListarClientes'
  import { Link } from "react-router-dom";
export const Home = () => {
  return (    
  <>        
    <h1>Lorem Ipsum</h1>
    <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor."</h3>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros orci, fermentum eu nunc at, rhoncus pellentesque ligula. Nulla eu ipsum fermentum, ornare erat sit amet, dapibus urna. Curabitur auctor tristique massa, in egestas enim hendrerit vel. Phasellus at dui lorem. Nunc gravida finibus orci eget mattis. Praesent in odio at tellus molestie eleifend in et turpis. Mauris porta libero in sapien ullamcorper, ac iaculis diam luctus. Proin ultrices enim metus, sed pulvinar augue fringilla in. Morbi eget sollicitudin magna. Proin mi purus, luctus et faucibus ut, vestibulum vitae neque. Nam a varius odio, sed consequat nisl. Praesent tristique fringilla erat, at gravida augue facilisis a. Quisque ullamcorper vitae leo eleifend lobortis. Cras eget nisi ipsum.

Sed lacinia nunc eget odio condimentum, non fringilla turpis molestie. Morbi dignissim sagittis erat, vel viverra neque mattis vel. Etiam consectetur nulla risus, sed auctor metus aliquet sed. Donec interdum, ante quis convallis pulvinar, sem purus fermentum lacus, sed imperdiet elit velit luctus nunc. Aenean luctus, ligula ut maximus euismod, sem dolor sollicitudin justo, a scelerisque risus leo a urna. Sed eget convallis erat. Donec quis blandit tellus. Nam maximus mauris in porttitor suscipit. Integer vulputate auctor feugiat. Aliquam efficitur ex eu ex porta, quis porta ipsum molestie. Nam tempus, lectus et pharetra varius, arcu erat placerat metus, eu efficitur urna nibh sed ex. Vestibulum interdum nisi et enim cursus, sed rhoncus arcu imperdiet.

Etiam vel tellus tortor. Vestibulum at sem blandit enim imperdiet placerat. Integer ac purus quis nunc pretium fringilla. Donec vitae felis rutrum, malesuada tellus eget, sagittis ex. Proin eget molestie erat. Etiam sollicitudin tellus eu nisi hendrerit rutrum. Ut tincidunt neque augue, vitae scelerisque nulla venenatis in. Vivamus quis ex erat. Donec ut purus et arcu scelerisque commodo vel vel ante. Pellentesque a urna id odio bibendum volutpat. Duis quis consequat libero. Cras consectetur turpis tellus, vel suscipit nisi rhoncus ut. Nullam elementum ex elementum tristique auctor.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu arcu tortor. Etiam et interdum risus, at dictum quam. Aenean diam leo, mattis sed convallis et, semper sed eros. Sed et sagittis nisl, nec iaculis lectus. Duis consequat mi nec arcu hendrerit, at fermentum mauris egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sollicitudin laoreet tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Maecenas dignissim consectetur nisl interdum cursus. Proin quis scelerisque augue, id ultricies sapien. Maecenas sit amet felis velit. Phasellus gravida id odio ac egestas. Vestibulum quam ex, cursus in ornare ac, convallis in magna. Fusce pulvinar est lectus, nec congue nulla consectetur et. Nulla rutrum ante a feugiat dapibus. Phasellus in eros sed mi euismod placerat non vitae nisi. Mauris sollicitudin dui et fringilla faucibus. Mauris malesuada id ex ac bibendum. Aliquam hendrerit, metus vel accumsan scelerisque, felis erat pulvinar diam, eget dapibus massa nibh id arcu. Nullam iaculis vel diam at rutrum.</p>
        
  </>
  )
}
 
export const Contact = () => {
    return (
        <>      
        <Form>

        <h1>  Contactenos </h1>
        <br />
        <br />
        <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </>
      );
  }


  export const Cliente = () => {
    const [alert, setalert] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault(); 
      setalert(true)
    }


    const oncerrar = () => {
      setalert(false)
    }

    return (
        <>      

        {alert &&
          <Alert dismissible variant="success" className='alerta'  onClose={oncerrar}>
          <h3>Se proceso correctamente </h3>
          El usuario   <strong>Jose Luis Mallqui </strong> se registro exitosamente
        </Alert>
        }
        
        
        <Form onSubmit={onSubmit}>

        <h1>  Datos del Cliente </h1>
        <br />
        <br />
        <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingrese sus nombres" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Registre sus apellidos" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="Example av aramb..." />
          </Form.Group>
     
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
    
          <Link to="/clientes">
            <Button variant="primary" type="submit">
              LISTA CLIENTES
            </Button>
          </Link>
        </Form>
        </>
      );
  }



  export const Service = () => {
    return (
      <div>Service</div>
    )
  }

  


function GridComplexExample() {
  
}

export default GridComplexExample;