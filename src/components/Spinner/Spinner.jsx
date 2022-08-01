import React, { Component } from 'react';
import "./Spinner.scss"

class Spinner extends Component {
    render() {
        return (
            <div className='spinner-wrapper'>
                <div className="spinner">
                    <div className="ring"></div>
                    <span>loading...</span>
                </div>
            </div>
        );
    }
}

export default Spinner;