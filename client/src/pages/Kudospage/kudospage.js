import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as $ from 'axios';


class Kudospage extends Component {
    state={
        from: "",
        to: "",
        title: "",
        message:"",
        kudos: [],
        modal:  false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
        console.log(event.target.name, event.target.value)
    }

    componentDidMount() {
        const userId = sessionStorage.getItem("token");
        $.get(`/api/user/${userId}`)
        .then((response) => {
            console.log(response.data[0].firstName)
            console.log(response)
            this.setState({from: response.data[0].firstName});
           

        })
    }

   kudosHtml = (array) => {
       const result = array.map((elem) => (`<Card>
                                                <CardBody>
                                                    <h3>${elem.title}</h3>
                                                    <h6>From: ${elem.from}</h6>
                                                    <h6>From: ${elem.to}</h6>
                                                    <p>${elem.message}</p>
                                                </CardBody>
                                            </Card>`));
       return result
   }

    renderkudos = () => {
        document.getElementById("kudos").innerHTML = this.kudosHtml();
    }


    render() {
        return(
            <div>
                <Container className="mx-auto">
                    <Row>
                        <Col md="10" >
                            <h1>Tiny Improvements</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2" md="2">
                            <Button color="danger" onClick={this.toggle}>Give Kudos</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className="kudosModal">
                                <ModalHeader toggle={this.toggle}>Give a Kudo</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="inputFrom" sm={2}>From</Label>
                                            <Col sm={10}>
                                                <Input type="text" readOnly name="from" id="inputFrom" placeholder="From" value={this.state.from}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="inputTo" sm={2}>To</Label>
                                            <Col sm={10}>
                                                <Input type="text" onChange={this.handleChange} name="to" id="inputTo" placeholder="To" value={this.state.to}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="inputTitle" sm={2}>Title</Label>
                                            <Col sm={10}>
                                                <Input type="text" onChange={this.handleChange} name="title" id="inputTitle" placeholder="Title" value={this.state.title} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="inputMessage" sm={2}>Message</Label>
                                            <Col sm={10}>
                                                <Input type="textarea" onChange={this.handleChange} name="message" id="inputMessage" value={this.state.message}/>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                                    <Button color="primary" onClick={this.renderkudos}>Send</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                        <Col sm="8" md="8" id="kudos"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Kudospage;