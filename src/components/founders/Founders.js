import React, { Component } from "react";
import "./founders.scss";

export default class Founders extends Component {
    render() {
        return (
            <div className='founders-wrapper'>
                <div className='container'>
                    <h4>THE FOUNDERS</h4>
                </div>

                <div className='founder-image'></div>

                <div className='overlay'>
                    <div className="content">
                        <h2>Maria Kenter</h2>
                        <div className='line'></div>
                        <h2>Roger Septimus</h2>
                    </div>
                </div>
            </div>
        );
    }
}
