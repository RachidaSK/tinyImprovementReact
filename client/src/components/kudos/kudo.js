import React from 'react';
import'../../../src/index.css';
import {Card, CardBody} from 'reactstrap';

const Kudo = (props) => (

    
   props.kudoList.length ? props.kudoList.map((kudo, i) => (
        <Card key={i}>
            <CardBody>
                <h3>{kudo.title}</h3>
                <h6>From: {kudo.from}</h6>
                <h6>From: {kudo.to}</h6>
                <p>{kudo.message}</p>
            </CardBody>
        </Card>
    )) : ( <p>Send kudo</p>)
)

export default Kudo;