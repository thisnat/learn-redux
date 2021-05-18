import React from 'react';
import { useState } from 'react';

import Axios from 'axios';
import { InputGroup,FormControl,Button } from 'react-bootstrap';

const PersonAdd = (props) => {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');

    const handleAddBtn = (e) => {
        e.preventDefault();

        if(name === '' || username === ''){
            alert("pls insert name and username");
        }else {
            Axios.post('http://localhost:3001/api/add',{name:name,username: username})
            .then((res) => {
                window.location.href = 'http://localhost:3000/';
            });
        }
    }

    return (
        <div>
            <h2>add some person</h2>
            <InputGroup>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </InputGroup>
            <InputGroup className="mt-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="username"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
            </InputGroup>
            <Button variant="primary" className="mt-3" onClick={handleAddBtn}>add</Button>
        </div>
    );
};

export default PersonAdd;