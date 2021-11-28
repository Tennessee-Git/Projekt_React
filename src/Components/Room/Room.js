import React, { Component } from 'react'
import '../Seats/Seats.css'

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            capacity: this.props.capacity,
            seatArray:[]
        }
    };
    
    render() {
        return (
            <div>
                <div className="screen">Ekran</div>
            </div>
        )
    }
}

