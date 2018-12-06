import React from 'react';
import {Navbar,NavbarBrand, Col, Row, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './login.css';



const Naviguation = (props) => (
    <Navbar light expand="md" className="naviguation">
        <NavbarBrand href="/" className="brand">Tiny Improvement</NavbarBrand>
        <Form className="ml-auto">
            <Row form >
                <Col md={5} >
                    <FormGroup>
                        <Label for="exampleEmail" >Email</Label>
                        <Input onChange={props.handleChange} type="email" name="email" id="loginEmail" placeholder="Email" />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input onChange={props.handleChange} type="password" name="password" id="loginPassword" placeholder="Password" />
                    </FormGroup>
                </Col>
                <Button onClick={props.handleEvent} color="primary" id="login-btn" >Log In</Button>
            </Row>
            
        </Form>
    </Navbar>
)

export default Naviguation;