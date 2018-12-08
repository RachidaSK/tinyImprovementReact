import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as $ from 'axios';

// const user1 = [{from: "me",
// to: "you",
// title: "hello",
// message: "love"}]

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
            console.log(response.data[0].kudo)
            console.log(response)
            this.setState({from: response.data[0].firstName});
            this.renderkudos(response.data[0].kudos);
        });

    }

    kudosHtml = (kudoList) => {
       const result = kudoList.map((kudo, i) => (`<div key=${i} class="card mt-4 text-center">
                                                <div class="card-body">
                                                    <h3>${kudo.title}</h3>
                                                    <h6>From: ${kudo.from}</h6>
                                                    <h6>From: ${kudo.to}</h6>
                                                    <p>${kudo.message}</p>
                                                </div>
                                            </div>`))
       return result
   }

    renderkudos = (argt) => {
        document.getElementById("kudos").innerHTML = this.kudosHtml(argt);
    }

    postKudo = (event) => {
        event.preventDefault();
        const userId = sessionStorage.getItem('token');

        const sender = this.state.from;
        const receiver = this.state.to;
        const title = this.state.title;
        const message = this.state.message;

        $.post("/api/kudo", {
            userId: userId,
            from: sender,
            to: receiver,
            title: title,
            message: message
        })
        .then(function(){
            
            this.componentDidMount();
        })

    }


    render() {
        return(
            <div>
                <Container className="mx-auto">
                    <Row>
                        <Col md="10" >
                            <h1 className="text-center" id="kudoTitle">Tiny Improvements</h1>
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