import React, { Component } from "react";
import BigHeadlineCard from "./BigHeadlineCard";
import SmallHeadlineCard from "./SmallHeadlineCard";
import "./latestNews.scss";

export default class LatestNews extends Component {
    render() {
        return (
            <div className='latest-news-wrapper'>
                <div className='container'>
                    <div className='latest-news-content'>
                        <div className='first'>
                            <h4>LATEST NEWS</h4>

                            <div className='first-content'>
                                <BigHeadlineCard />
                            </div>

                            <div className='see-all-news'>
                                <div className='see-all-news-btn'>
                                    <div
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: "rgba(0,0,0,0.7)"
                                        }}>
                                        See all news
                                        <i className='fas fa-chevron-right ml-3'></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='second'>
                            <BigHeadlineCard />

                            <div className='small'>
                                <div className='sm-first'>
                                    <SmallHeadlineCard />
                                </div>

                                <div className='sm-second'>
                                    <SmallHeadlineCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
