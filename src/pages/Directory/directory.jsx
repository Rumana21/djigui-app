import {
    Link
} from 'react-router-dom';
import React from 'react'

import Ads from "../../components/Ads/ads"
import LegalServices from "../../components/Directory/legalServices"
import FinancialServices from '../../components/Directory/financialServices';

const Directory = () => {

    const [active, setActive] = React.useState("financialServices");
    
    const handleFinancialServices = () => {
        
        setActive("financialServices");
      };
      const handleLegalServices = () => {
        
        setActive("legalServices");
      };

    return (
        <div>
            <div className="flex flex-row">

                <div className="basis-1/4 mt-14">
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100 m-6">
                        <div className="relative mb-4">
                            <button className= {active === "financialServices" ? " opacity-20 " : " "} onClick={handleFinancialServices}  >
                                <img src="https://mdbootstrap.com/img/new/standard/nature/182.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    Financial Services
                                </h1>
                            </button>
                        </div>

                        <div className="relative mb-4">
                            <div className= {active === "legalServices" ? " opacity-20 " : " "} onClick={handleLegalServices} >
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/100.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    Legal Services
                                </h1>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <a href="#">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    Touriest Services
                                </h1>
                            </a>
                        </div>
                        <div className="relative mb-4">
                            <a href="#">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" />
                                <h1 class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    Transportation Services
                                </h1>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="basis-3/4 mt-14 mr-6">
                {active === "financialServices" ?  <FinancialServices /> : <LegalServices />}

                    {/* <LegalServices /> */}
                    
                    

                </div>

                {/* <div className="basis-1/4 mt-14">
                    {Array(3).fill(<Ads />)}
                </div> */}
            </div>

        </div>
    )

}

export default Directory