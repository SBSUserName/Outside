import React from 'react';

const BeneficiariesCard = ({imageName, title}) => {
    return (
        <div className="beneficiaries-card-wrapper">
            <div className="img-fluid mb-3 image-div">
                <img src={imageName} alt="beneficiaries" />
            </div>

            <p>
                {title}
            </p>
        </div>
    )
}

BeneficiariesCard.defaultProps = {
    imageName: "s_arch1",
    title: "Hey hello this is the world everyone"
}

export default BeneficiariesCard
