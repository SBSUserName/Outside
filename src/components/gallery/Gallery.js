import React, { Component } from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import SmGallery from "./SmGallery";
import "./gallery.scss";

export default class Gallery extends Component {
    render() {
        return (
            <>
            <div className='gallery-wrapper'>
                <div className='container'>
                    <div className='gallery-contents'>
                        <div className='first'>
                            <h4>GALLERY</h4>

                            <div className='gallery-card'>
                                <div className='mb-2'>
                                    <img
                                        src={gallery1}
                                        alt='galley1'
                                        className='img-fluid'
                                    />
                                </div>

                                <p>Caption lorem ipsum dolor site amet</p>
                            </div>
                        </div>

                        <div className='second'>
                            <div className='gallery-card'>
                                <div className='mb-2'>
                                    <img
                                        src={gallery2}
                                        alt='galley2'
                                        className='img-fluid'
                                    />
                                </div>

                                <p>Caption lorem ipsum dolor site amet</p>
                            </div>
                        </div>

                        <div className='third'>
                            <div className='gallery-card'>
                                <div className='mb-2'>
                                    <img
                                        src={gallery3}
                                        alt='galley3'
                                        className='img-fluid'
                                    />
                                </div>

                                <p>Caption lorem ipsum dolor site amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm-gallery-wrapper">
                <SmGallery />
            </div>
            </>
        );
    }
}
