import React, { Component } from "react";
import buildingTop from "../../assets/images/building_top.jpg";
import BigHeadlineCard from "./BigHeadlineCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class SmLatestNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagesArr: [
                {
                    imageName: buildingTop,
                    title: "Morbi magna turpis dolor adipiscing",
                },
                {
                    imageName: buildingTop,
                    title: "Curabitur cursus bibendum mauris placerat",
                },
                {
                    imageName: buildingTop,
                    title: "Nisi, sed dui, ac enim",
                },
            ],
        };
    }

    render() {
        console.log(this.state);

        return (
            <div className='sm-latest-news-content'>
                <h4>LATEST NEWS</h4>

                <OwlCarousel
                    className='owl-theme'
                    loop
                    margin={0}
                    nav={false}
                    dots={false}
                    items='1'>
                    {this.state.imagesArr.map((image) => (
                        <div className='item'>
                            <BigHeadlineCard
                                imageName={image.imageName}
                                title={image.title}
                            />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        );
    }
}
