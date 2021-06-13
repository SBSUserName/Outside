import React, { Component } from "react";

export default class TopSocialLinks extends Component {
    render() {
        return (
            <div className='text-right' style={{ color: "#74788A", padding: "16px 0" }}>
                <div className='container'>
                    <i className='fab fa-twitter mr-4'></i>
                    <i className='fab fa-linkedin-in'></i>
                </div>
            </div>
        );
    }
}
