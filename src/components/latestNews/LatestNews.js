import React, { Component } from "react";
import BigHeadlineCard from "./BigHeadlineCard";
import SmallHeadlineCard from "./SmallHeadlineCard";
import SmLatestNews from "./SmLatestNews";
import buildingTop from "../../assets/images/building_top.jpg";
import buildingTop1 from "../../assets/images/building_top1.jpg";
import buildingTop2 from "../../assets/images/building_top2.jpg";
import buildingTop3 from "../../assets/images/building_top3.jpg";
import "./latestNews.scss";

export default class LatestNews extends Component {
    render() {
        return (
            <>
                <div className='latest-news-wrapper'>
                    <div className='container'>
                        <div className='latest-news-content'>
                            <div className='first'>
                                <h4>LATEST NEWS</h4>

                                <div className='first-content'>
                                    <BigHeadlineCard 
                                        imageName={buildingTop}
                                        title="Molestie molesti metus, tempus in commodo, semper tellus" 
                                    />
                                </div>

                                <div className='see-all-news'>
                                    <div className='see-all-news-btn'>
                                        <div>
                                            See all news
                                            <i className='fas fa-chevron-right ml-3'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='second'>
                                <BigHeadlineCard 
                                    imageName={buildingTop1}
                                    title="Molestie molesti metus, tempus in commodo, semper tellus"
                                />

                                <div className='small'>
                                    <div className='sm-first'>
                                        <SmallHeadlineCard 
                                            imageName={buildingTop2}
                                            title="In faucibus suspendisse magna massa nibh elementrum augue phasellus tristique senectus urna" 
                                        />
                                    </div>

                                    <div className='sm-second'>
                                        <SmallHeadlineCard 
                                            imageName={buildingTop3}
                                            title="Feugiat mollis quam sollicitudin egestas asipsiscing amet" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sm-lates-news-wrapper'>
                    <SmLatestNews />
                </div>
            </>
        );
    }
}
