import React, { Component } from "react";

export default class SmallNavbar extends Component {
    render() {
        return (
            <>
                <div className='sm-first-row'>
                    <div className='sm-brand'>
                        <h3 className='mb-0'>COMPANY</h3>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className='line'></div>
                            </div>
                            <h5 className='mb-0'>NAME</h5>
                            <div className='d-flex align-items-center'>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>

                    <div className='sm-close'>
                        <button onClick={this.props.smNavClick}>
                            <i class='fas fa-times'></i>
                        </button>
                    </div>
                </div>

                <hr></hr>

                <div className='sm-founders section'>
                    <p>Founders</p>

                    <ul>
                        <li>Maria Kenter</li>
                        <li>Roger Spetimus</li>
                    </ul>
                </div>

                <hr />

                <div className='sm-beneficiaries'>
                    <p>Beneficiaries</p>
                </div>

                <hr />

                <div className='sm-scholarships section'>
                    <p>Scholarships</p>

                    <ul>
                        <li>Sed ut tincidunt euismod malesudada</li>
                        <li>Nunc, sit in carius pulvinar</li>
                    </ul>
                </div>

                <hr />

                <div>
                    <p>Press</p>
                </div>

                <hr />

                <div>
                    <p>Contact</p>
                </div>

                <hr />

                <div>
                    <p>Blog</p>
                </div>
            </>
        );
    }
}
