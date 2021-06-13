import React, { Component } from "react";
import "./mission.scss";

export default class Mission extends Component {
    render() {
        return (
            <div className='mission-wrapper'>
                <div className='red-part'>
                    <div className='container'>
                        <h4 className='mb-4'>OUR MISSION</h4>

                        <div style={{ width: 730 }}>
                            <h2 className="mb-4">
                                Imperdiet quis leo scelerisque nunc magna mattis
                                vitae non non
                            </h2>

                            <div className='p1'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Provident fugit aliquid
                                ducimus ea commodi consectetur velit corporis.
                                Natus nam sed debitis, eveniet nulla, sint
                                accusamus quidem, cupiditate modi necessitatibus
                                architecto.
                            </div>
                        </div>
                    </div>

                    <div className='mission-image'>
                    </div>
                </div>
            </div>
        );
    }
}
