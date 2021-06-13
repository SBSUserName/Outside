import React, { Component } from "react";
import buildingTop from "../../assets/images/building_top.jpg";

export default class SmallHeadlineCard extends Component {
    render() {
        return (
            <div className='bigheadline-card-wrapper'>
                <div
                    className='img-fluid mb-3'
                    style={{ maxHeight: 300, overflow: "hidden" }}>
                    <img
                        src={buildingTop}
                        alt='visual aid'
                        className='img-fluid'
                    />
                </div>

                <div className='date mb-3'>
                    <div className='p2'>NOVEMBER 19</div>
                    <div className='line'>
                        <div></div>
                    </div>
                    <div className='p2'>2020</div>
                </div>

                <div className='title'>
                    <div className="p1">
                        Molestie molesti metus, tempus in commodo, semper tellus
                    </div>
                </div>
            </div>
        );
    }
}
