import React from 'react';


const BigHeadlineCard = ({imageName, title}) => {
    return (
        <div className="bigheadline-card-wrapper">
            <div className="img-fluid mb-3" style={{ maxHeight: 300, overflow: "hidden" }}>
                <img src={imageName} alt="visual aid" className="img-fluid" />
            </div>

            <div className="date mb-3">
                <div className="p2">
                    NOVEMBER 19
                </div>
                    <div className="line">
                        <div></div>
                    </div>
                <div className="p2">
                    2020
                </div>
            </div> 

            <div className="title">
                <h2>{title}</h2>
            </div> 
        </div>
    )
}

BigHeadlineCard.defaultProps = {
    imageName: "bulding_top",
    title: "Molestie molesti metus, tempus in commodo, semper tellus"
}

export default BigHeadlineCard
