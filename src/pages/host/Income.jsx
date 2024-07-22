import React from 'react'
import incomeImg from '../../images/income.png'

const Income = () => {
    return (
        <div className="income-page">
            <div className="income-section">
                <h1 className="host-titles">Income</h1>
                <h2 className="gray-small-text">Last <span className="underline">30 days</span></h2>
                <h3>$1,430</h3>
                <img src={incomeImg} alt="A graph showing the income for the past six months (from July to December)."/>
            </div>
            <div className="transactions-section">
                <div className="transactions-section-top">
                    <h4>Your transactions (3)</h4>
                    <p className="gray-small-text">Last <span className="underline">30 days</span></p>
                </div>
                <div className="transaction-card">
                    <h5>$530<span>1/12/23</span></h5>
                </div>
                <div className="transaction-card">
                    <h5>$425<span>10/10/23</span></h5>
                </div>
                <div className="transaction-card">
                    <h5>$1000<span>21/08/23</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Income