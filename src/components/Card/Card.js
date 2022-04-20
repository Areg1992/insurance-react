import React from "react";
import './Card.scss';

function Card({totalPrice, claimPrice, policyPrice}) {
    return (
        <div className="card">
            <div className="price">
                {totalPrice}
                <sup>
                    $
                </sup>
            </div>
            <div className="card-text">
                <p>
                    Total Value of Disbursement
                </p>
            </div>
            <div className="progress-wrapper">
                <div className="flex-container align-middle align-justify progress-info">
                    <div>
                        Policy
                    </div>
                    <div>
                        {policyPrice}$
                    </div>
                </div>
                <div className="progress progress-green">
                    <div style={{width: policyPrice/totalPrice*100 +"%"}}/>
                </div>
            </div>
            <div className="progress-wrapper">
                <div className="flex-container align-middle align-justify progress-info">
                    <div>
                        Claim
                    </div>
                    <div>
                        {claimPrice}
                        $
                    </div>
                </div>
                <div className="progress progress-purple">
                    <div style={{width: claimPrice/totalPrice*100 +"%"}}/>
                </div>
            </div>
        </div>
    )
}

export default Card;