import React, { Component } from 'react';
import Axios from 'axios';

import { connect } from 'react-redux';
import { fetchPerson } from '../actions/PersonAction';

import PersonBox from '../components/PersonBox';
import TestModal from '../components/TestModal';

class PersonList extends Component {
    constructor(props){
        super(props);

        this.state = {
            show : false,
            modalData : {}
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchPerson());
    }

    render() {
        const { data } = this.props;

        const handleBtn = (e) => {
            e.preventDefault();
    
            const id = e.target.getAttribute('personid');
            Axios.get('http://localhost:3001/api/id/' + id)
            .then((res) => {
                this.setState({
                    modalData : res.data
                })

                handleShow();
            })
        }

        const handleShow = () => {
            this.setState({
                show : true
            })
        }

        const handleClose = () => {
            this.setState({
                show : false
            })
        }

        return (
            <div>
                <h2>person list</h2>
                {
                    data.isFetching
                        ? <h1>loading...</h1>
                        : null
                }

                {
                    data.isError
                        ? <h1>error cant connect db</h1>
                        : null
                }
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(data.personData).length > 0
                            ? data.personData.map((data, index) => (
                                <PersonBox key={index} data={data} handleBtn={handleBtn}/>
                            ))
                            : null
                        }
                    </tbody>
                </table>
                <TestModal show = {this.state.show} handleClose={handleClose} modalData={this.state.modalData}/>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        data: state
    }
}

export default connect(mapState)(PersonList);