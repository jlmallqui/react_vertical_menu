import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import { Footer } from './footer'
import { useNavigate, Link } from 'react-router-dom';
//// <a className='nav-link' href="/" >Inicio</a>
export const Home = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className=''>

            <section id='/' className='home'>
                <div className='position-absolute fondo'>
                </div>
                <div className='position-fixed web-nav'>

                    <Nav className='navbar navbar-expand-lg bg-light pt-3 pb-3 bloque-transparente'>
                        <div className='container-fluid'>
                            <a className='navbar-brand'>SISTEMASMJ</a>
                            <Button className='navbar-toggler btn-light' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                            </Button>
                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <ul className='navbar-nav me-auto text-center'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="/" >INICIO</a>                                    
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="#about" >SOBRE MI</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="#tecnologias" >TECNOLOGIAS</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="#contact" >CONTACTO</a>
                                    </li>
                                </ul>

                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Clientes
                                </Button>

                                <Login show={modalShow} onHide={() => setModalShow(false)}
                                />

                            </div>
                        </div>
                    </Nav>
                    <div className="border border-secondary border-1"></div>
                </div>

                <div className='position-absolute mt-5' >
                    <div className='col-md-4 bloque-transparente ms-5 p-4 mt-5 col-md-6'>
                        <h4>Jose Mallqui</h4>
                        <p> Realizo sistemas web con las ultimas tecnologias de informatica,
                            elaborando un software escalable y de alto rendimiento. </p>

                    </div>
                </div>
            </section>

            <section id='about' className='pt-5'>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-8'>
                            <div className='mt-5 mb-5'>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <h2>SOBRE&nbsp;MI</h2>
                                        </div>
                                        <div className="col-7">
                                            <p> Soy Jose Mallqui, un apasionado por el desarrollo de sitios web.
                                                Diseño y desarrollo siempre con la finalidad de obtener un sistema de acuerdo a sus necesidades.</p>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <p>Mi objetivo principal es lograr que las personas puedan conectar con más clientes, marcas o negocios utilizando medios digitales de una manera eficaz, sencilla y amigable, esto lo logro creando sitios webs faciles de usar, amigables
                                                construidos con las mejores prácticas y escalables en el tiempo.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 d-flex'>
                            <img className='img-thumbnail img-perfil mt-2 mx-auto' src='/images/web/perfil.jpg' />
                        </div>

                    </div>
                </div>
                <hr />
            </section>


            <section id='tecnologias' className='pt-5'>


                <div className='container'>
                    <div className='col-sm-12'>
                        <h2>TECNOLOGIAS USADAS </h2><br />
                        <p>
                            Los sistemas son desarrollados con las ultimas tecnologias de seguridad y desempeño.
                        </p><br /> <br /> <br />

                    </div>

                    <div className='row mx-auto text-center'>

                        <div className='col-sm-6 col-md-4'>
                            <h5>Java</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>Genexus</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>Bootstrap</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>React</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>JWT</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>Nodejs</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>Mysql</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>SQl Server</h5>
                            <p><br />
                            </p></div>

                        <div className='col-sm-6 col-md-4'>
                            <h5>PostgreSQL</h5>
                            <p><br />
                            </p></div>
                    </div>
                </div>
                <hr />
            </section>


            <section id='contact' className='pt-3 pb-5 mb-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-12 mb-5' >
                        </div>

                        <div className='col-md-6 col-sm-12'>
                            <h2>MIS DATOS:  </h2>
                            <div className='mt-5'>
                                <p><i className='bi bi-envelope'></i> <a >admsistemasmj@gmail.com</a></p>
                                <p><i className='bi bi-phone'></i> <a >51910101729</a></p>
                            </div>
                        </div>

                        <div className='col-md-6 col-sm-12'>
                            <h2>REDES SOCIALES   </h2>
                            <div className='mt-5'>
                                <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg> <a href='https://www.facebook.com/sistemasmj'>@sistemasmj</a></p>
                                <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg> <a href='https://api.whatsapp.com/send?phone=51910101729&amp;text=Me%20podrias%20brindar%20mayor%20informacion%20sobre%20tus%20sistemas%3F'>910101729</a> </p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg> <a href='https://t.me/JoseMJ'> @JoseMJ</a> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}


function Login(props) {

    const url = 'http://admin.localhost:5173/'
    const [user, setuser] = useState('')

    const onChangeValue = ({ target }) => {
        setuser(target.value.trim())
    }


    const onSubmit = (event) => {
        event.preventDefault();
    }

    const IniciarSesion = () => {

        console.log(user);

        let nav = useNavigate();
        nav("http://admin.localhost:5173/");
        console.log('use navigate');

    }


    return (
        <Modal size="sm" {...props} aria-labelledby="contained-modal-title-vcenter"   >


            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"  >
                    Intranet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-4 pb-4'>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Usuario" value={user} onChange={onChangeValue} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Modal.Footer>

                        <div className="row container text-center" >
                            <div className="col">

                                <Button onClick={IniciarSesion} variant="primary" type="submit">
                                    Login
                                </Button>


                            </div>
                            <div className="col">
                                <Button variant="danger" onClick={props.onHide}>
                                    Close
                                </Button>
                            </div>
                        </div>

                    </Modal.Footer>
                </Form>
            </Modal.Body>

        </Modal>
    );
}
