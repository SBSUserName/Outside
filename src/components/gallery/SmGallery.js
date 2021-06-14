import React, { Component } from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class SmGallery extends Component {
    render() {
        return (
            <div className='sm-gallery-content'>
                <h4>GALLERY</h4>

                <OwlCarousel
                    className='owl-theme'
                    loop
                    margin={0}
                    nav={false}
                    dots={false}
                    items='1'>
                    <div className='item'>
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

                    <div className='item'>
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

                    <div className='item'>
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
                </OwlCarousel>
            </div>
        );
    }
}
