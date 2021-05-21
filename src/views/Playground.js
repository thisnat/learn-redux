import React,{ useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPerson,fetchModalData } from '../actions/PersonAction';

import MyModal from '../components/MyModal'
import $ from 'jquery'

const Playground = (props) => {
    
    const { dispatch } = props;

    useEffect(() => {
        dispatch(fetchPerson());
    },[dispatch])

    const handleModalBtn = (e) => {
        e.preventDefault();

        const id = e.target.getAttribute('personid');
        dispatch(fetchModalData(id))

        $('#myModal').modal('show')
    }

    return (
        <div>
            <h1 style={{fontSize : 64,marginLeft : 20}}>playground</h1>
            <div className="container">
                <p style={{fontSize : 32}} className="lead">using vanilla bootstrap and jquery modal lol <span style={{fontWeight : "bold",fontSize : 18}}>( yeah, its eXpErImEnTaL !!11!1!1 )</span></p>
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
                                        <td><button className="btn btn-primary" personid={data._id} onClick={handleModalBtn}>modal</button></td>
                                    </tr>
                                ))
                                : <p style={{fontSize : 64}}>run your server lol</p>
                            }
                        </tbody>
                    </table>

                <MyModal title={props.data.modalData.name} content={props.data.modalData.username} id={props.data.modalData._id}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Playground);