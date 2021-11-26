import React, { Component } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export default class EditShowingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.id
        }
    };

    render() {
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}