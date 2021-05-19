import React,{ useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPerson,fetchModalData } from '../actions/PersonAction';

import MyModal from '../components/MyModal'

const Playground = (props) => {
    
    const { dispatch } = props;

    useEffect(() => {
        dispatch(fetchPerson());
    },[dispatch])

    const handleModalBtn = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('personid');
        dispatch(fetchModalData(id))
    }

    return (
        <div>
            <h1>playground</h1>

            <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(props.data.personData).length > 0
                            ? props.data.personData.map((data,index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td><button className="btn btn-primary" personid={data._id} onClick={handleModalBtn} data-toggle="modal" data-target="#myModal">modal</button></td>
                                </tr>
                            ))
                            : null
                        }
                    </tbody>
                </table>

            <MyModal title={props.data.modalData.name} content={props.data.modalData.username} id={props.data.modalData._id}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Playground);