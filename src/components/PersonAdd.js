import React from 'react';
import { InputGroup,FormControl,Button } from 'react-bootstrap';

const PersonAdd = () => {
    return (
        <div>
            <h2>add some person</h2>
            <InputGroup>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="name"
                />
            </InputGroup>
            <InputGroup className="mt-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="username"
                />
            </InputGroup>
            <Button variant="primary" className="mt-3">add</Button>
        </div>
    );
};

export default PersonAdd;