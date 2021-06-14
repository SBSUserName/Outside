import React, { Component } from "react";

export default class Headline extends Component {
    render() {
        return (
            <div className='headline-wrapper py-5'>
                <h1>
                    Ullamcorper diam turpis egestas egestas fames enim risus
                </h1>

                <div className="read-more d-flex flex-column justify-content-end">
                    <div className='d-flex'>
                        <div className='p-3 read-more-text'>Read More</div>

                        <div className="separator"></div>

                        <div className='p-3 arrow'>
                            <i className='fas fa-chevron-right'></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
