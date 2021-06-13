import React, { Component } from "react";
import BeneficiariesOwlCarousel from "./BeneficiariesOwlCarousel";
import "./beneficiaries.scss";

export default class Beneficiaries extends Component {
    render() {
        return (
            <div className='beneficiaries-wrapper'>
                    <h4>BENEFICIARIES</h4>

                    <BeneficiariesOwlCarousel />
            </div>
        );
    }
}
