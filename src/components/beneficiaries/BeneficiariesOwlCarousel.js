import React, { Component } from "react";
import BeneficiariesCard from "./BeneficiariesCard";
import s_arch1 from "../../assets/images/s_arch1.jpg";
import s_arch2 from "../../assets/images/s_arch2.jpg";
import s_arch3 from "../../assets/images/s_arch3.jpg";
import s_arch4 from "../../assets/images/s_arch4.jpg";
import s_arch5 from "../../assets/images/s_arch5.jpg";
import s_arch6 from "../../assets/images/s_arch6.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class BeneficiariesOwlCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 4,
                    },
                },
            },

            imagesArr: [
                {
                    imageName: s_arch1,
                    title: "Morbi magna turpis dolor adipiscing",
                },
                {
                    imageName: s_arch2,
                    title: "Curabitur cursus bibendum mauris placerat",
                },
                {
                    imageName: s_arch3,
                    title: "Nisi, sed dui, ac enim",
                },
                {
                    imageName: s_arch4,
                    title: "Vitae Morbi magna turpis ullamc mauris placerat",
                },
                {
                    imageName: s_arch5,
                    title: "Morbi magna turpis dolor adipiscing",
                },
                {
                    imageName: s_arch6,
                    title: "Curabitur cursus bibendum mauris placerat",
                },
                {
                    imageName: s_arch1,
                    title: "Morbi magna turpis dolor adipiscing",
                },
                {
                    imageName: s_arch2,
                    title: "Curabitur cursus bibendum mauris placerat",
                },
                {
                    imageName: s_arch3,
                    title: "Nisi, sed dui, ac enim",
                },
                {
                    imageName: s_arch4,
                    title: "Vitae Morbi magna turpis ullamc mauris placerat",
                },
                {
                    imageName: s_arch5,
                    title: "Morbi magna turpis dolor adipiscing",
                },
                {
                    imageName: s_arch6,
                    title: "Curabitur cursus bibendum mauris placerat",
                }
            ],
        };
    }

    render() {
        console.log(this.state);

        return (
            <OwlCarousel
                className='owl-theme'
                loop
                margin={70}
                nav={false}
                dots={false}
                items='4'
                {...this.state.options}>
                {this.state.imagesArr.map((image) => (
                    <div className='item'>
                        <BeneficiariesCard
                            imageName={image.imageName}
                            title={image.title}
                        />
                    </div>
                ))}
            </OwlCarousel>
        );
    }
}
