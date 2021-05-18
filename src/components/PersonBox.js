import React from 'react';

const PersonBox = ({ data,handleBtn }) => {

    return (
        <tr>
            <td>{data._id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td><button className="btn btn-primary" onClick={handleBtn} personid={data._id}>show info</button></td>
        </tr>
    );
};

export default PersonBox;