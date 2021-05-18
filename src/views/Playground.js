import React from 'react';

const Playground = () => {

    const handleModalBtn = (e) => {
        e.preventDefault();

        console.log("click");
    }

    return (
        <div>
            <h1>playground</h1>
            <button className="btn btn-primary" onClick={handleModalBtn}>modal</button>
        </div>
    );
};

export default Playground; <h1>playground</h1>