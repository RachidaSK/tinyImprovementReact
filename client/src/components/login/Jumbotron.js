import React from 'react';
import { Jumbotron, Col, Row, Button, Media, Form, FormGroup, Label, Input} from 'reactstrap';
import teamImage from './Images/team.jpeg';
import './login.css';


const Registration = (props) => (
    <Jumbotron className="signUp">
        <Row>
            <Col sm="6" md="6">
                <h2>Empower your team</h2>
                <Media src={teamImage} className="img-fluid"/>
            </Col>
            <Col sm="4" md="4">
                <h1>Create Account</h1>
                <Form >
                    <Row form >
                        <Col md={6} >
                            <FormGroup>
                                <Label for="inputFirstName" >First Name</Label>
                                <Input onChange={props.handleChange} type="text" name="FirstName" id="inputFirstName" placeholder="First Name" value={props.fnValue} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="inputLasttName">Last Name</Label>
                                <Input onChange={props.handleChange} type="text" name="LastName" id="inputLasttName" placeholder="Password" value={props.lnValue}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input onChange={props.handleChange} type="email" name="email1" id="signupEmail" placeholder="with a placeholder" value={props.email1Value}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input onChange={props.handleChange} type="password" name="password1" id="signupPassword" placeholder="password placeholder" value={props.pw1Value}/>
                    </FormGroup>
                    <Button onClick={props.handleEvent} color="primary" className="float-right" id="signup-btn">Sign Up</Button>
                </Form>
            </Col>
        </Row> 
    </Jumbotron>
)

export default Registration;