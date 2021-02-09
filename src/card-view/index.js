import React from 'react';
import { Card } from 'react-bootstrap';

class MyCard extends React.Component {

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Name - Peeyush Kumar</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Email: </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Mobile: </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Phone: </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default MyCard;
