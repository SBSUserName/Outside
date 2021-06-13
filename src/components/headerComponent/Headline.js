import React, { Component } from "react";

export default class Headline extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between headline-wrapper py-5'>
                <h1>
                    Ullamcorper diam turpis egestas egestas fames enim risus
                </h1>

                <div className="read-more d-flex flex-column justify-content-end">
                    <div className='d-flex' style={{ border: "2px solid rgba(0,0,0,0.25)" }}>
                        <div className='p-3'>Read More</div>

                        <div style={{ border: "1px solid rgba(0,0,0,0.25)" }}></div>

                        <div className='p-3'>
                            <i class='fas fa-chevron-right'></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
