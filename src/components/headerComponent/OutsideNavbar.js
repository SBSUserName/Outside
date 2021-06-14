import React, { Component } from "react";
import SmallNavbar from "./SmallNavbar";

export default class OutsideNavbar extends Component {
    smNavClick = () => {
        document.getElementById("smNav").classList.toggle("show");
    };

    render() {
        return (
            <div className='outsidenavbar-wrapper' id='outnav'>
                <div className='brand'>
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

                <div className='outside-links'>
                    <div>
                        <span>Founders</span>
                        <span>Beneficiaries</span>
                        <span>Scholarships</span>
                        <span>Press</span>
                        <span>Blog</span>
                        <span>Contact</span>
                    </div>
                </div>

                <div className='sm-nav-btn'>
                    <button onClick={this.smNavClick}>
                        <i class='fas fa-bars'></i>
                    </button>
                </div>

                <div className='sm-navbar' id='smNav'>
                    <SmallNavbar smNavClick={this.smNavClick} />
                </div>
            </div>
        );
    }
}
