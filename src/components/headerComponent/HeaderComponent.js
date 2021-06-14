import React, { Component } from "react";
import OutsideNavbar from "./OutsideNavbar";
import Headline from "./Headline";
import $ from "jquery";
import "./jsAnimations";
import "./headerComponent.scss";

export default class HeaderComponent extends Component {
    componentDidMount() {
        $(window).scroll(function() {
            if($(window).scrollTop() > 100) {
                document.getElementById("outnav").classList.add("animate");
            } else {
                document.getElementById("outnav").classList.remove("animate");
            }
        });
    }

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
