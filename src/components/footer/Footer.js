import React, { Component } from "react";
import "./footer.scss";

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <div className='container'>
                    <div className='footer-brand'>
                        <h4 className='mb-0'>COMPANY</h4>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='line'></div>
                            </div>
                            <h6 className='mb-0'>NAME</h6>
                            <div className='d-flex align-items-center'>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='footer-nav'>
                        <div>
                            <span>Founders</span>
                            <span>Beneficiaries</span>
                            <span>Scholarships</span>
                            <span>Press</span>
                            <span>Blog</span>
                            <span>Contact</span>
                        </div>

                        <div>
                            <i className='fab fa-twitter mr-4'></i>
                            <i className='fab fa-linkedin-in'></i>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div>
                            <span>Privacy Policy</span>
                            <span>Terms & Conditions</span>
                        </div>

                        <div>
                            <span>© 2021 Company Name. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
