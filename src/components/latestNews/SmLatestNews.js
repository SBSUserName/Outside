import React, { Component } from "react";
import BigHeadlineCard from "./BigHeadlineCard";
import buildingTop from "../../assets/images/building_top.jpg";
import buildingTop1 from "../../assets/images/building_top1.jpg";
import buildingTop2 from "../../assets/images/building_top2.jpg";
import buildingTop3 from "../../assets/images/building_top3.jpg";
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
                    title: "Molestie molesti metus, tempus in commodo, semper tellus",
                },
                {
                    imageName: buildingTop1,
                    title: "Molestie molesti metus, tempus in commodo, semper tellus",
                },
                {
                    imageName: buildingTop2,
                    title: "In faucibus suspendisse magna massa nibh elementrum augue phasellus tristique senectus urna",
                },
                {
                    imageName: buildingTop3,
                    title: "Feugiat mollis quam sollicitudin egestas asipsiscing amet",
                }
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
