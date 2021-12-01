import React, { Component } from 'react'
import './Seats.css'

export default class Room extends Component {
   
    handleClick = event =>{
         this.props.setSelectedSeat(event.target.value);
    }

    createSeatArray = () =>{
        let SeatArray = [];
        for(let i = 0; i<this.props.capacity/10;i++)
        {
            let children = [];
            let letter = String.fromCharCode(i+65);
            for(let j = 1; j<11; j++)
            {
                let _key = `${letter}-${j}`;
                children.push(
                <input 
                    key={_key} 
                    type="checkbox" 
                    className="seat" 
                    value={letter+"-"+j} 
                    onClick={this.handleClick}/>
                );
            }
            SeatArray.push(<div className="seats-row" key={letter}>
                <div className="row-name">{letter}</div>
                {children}
            </div>)
        }
        return SeatArray
    }
    
    render() {
        return (
            <div className="room">
                <div className="screen">Ekran</div>
                {this.createSeatArray()}
            </div>
        )
    }
}