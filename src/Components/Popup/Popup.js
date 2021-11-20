import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ?(
        <div className="popup">
            <div className="popup-inner">
                <div className="close-btn">
                <i className="far fa-times-circle" onClick={() => props.setTrigger(false)}/>
                </div>
                {props.children}
            </div>
        </div>
    ): ""
}

export default Popup
