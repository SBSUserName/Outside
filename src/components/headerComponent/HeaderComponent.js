import React, { Component } from "react";
import OutsideNavbar from "./OutsideNavbar";
import Headline from "./Headline";
import "./headerComponent.scss";

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header-component-wrapper'>
                <div className='white-part py-4'>
                    <div className='container' style={{position: "relative"}}>
                        <OutsideNavbar />
                        <Headline />
                    </div>

                    <div className='header-image'>
                    </div>
                </div>
            </div>
        );
    }
}
