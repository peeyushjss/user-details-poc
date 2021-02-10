import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = (props) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Name - Peeyush Kumar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Email: {props.email}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Mobile: {props.mobile ? props.mobile : "NA"}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Phone: {props.phone ? props.phone : "NA"}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MyCard;
