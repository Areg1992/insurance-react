import React from "react";
import './Reports.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import coverImg1 from '../assets/img/coverImg1.png';
import coverImg2 from '../assets/img/Group_43.png';
import Card from "../components/Card/Card";

const cardList = [
    {
        totalPrice: 1000,
        policyPrice: 400,
        claimPrice: 800
    },

    {
        totalPrice: 2500,
        policyPrice: 1100,
        claimPrice: 1400
    },
    {
        totalPrice: 2500,
        policyPrice: 1100,
        claimPrice: 1400
    }
];

class Reports extends React.Component {
    state = {
        value: 'NEWBIE20',
        copied: false,
    };
    render() {
        return (
            <div className="main-inside">
                <div className="reports">
                    <div className="cover">
                        <img src={coverImg1} alt="" title=""
                             className="cover-img-1"/>
                        <img src={coverImg2} alt="" className="cover-img-2"/>
                        <div className="cover-info">
                            <div className="cover-title">
                                <p>
                                    20% Safe On Your First Account
                                </p>
                            </div>
                            <div className="flex-container align-middle align-center code-wrapper">
                                <div className="code">
                                    {this.state.value}
                                </div>
                                <div className="copy-code">
                                    <CopyToClipboard text={this.state.value}
                                                     onCopy={() => this.setState({copied: true})}>
                                        <div>
                                            Copy Code
                                        </div>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-list">
                        {cardList.map((item, index)=>{
                            return (
                                <Card totalPrice={item.totalPrice} claimPrice={item.claimPrice} policyPrice={item.policyPrice} key={index}/>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default Reports;