import React, { Component } from 'react'
import { connect } from 'react-redux'
import NumberField from '../containers/NumberField'
import {
    updateStockPrice,
    updateFunds,
    updateShares,
    updateAccountRisk,
    updateStopLossPercentage,
    updateTotalRisk,
    updateStopLimit,
    updateTakeProfit,
} from '../redux/actions/stockForm'

// TODO: Set Stop Loss Price Point
//  This should be done using stockPrice, Funds, and lossRiskPercentage
//  

class StockInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditingFunds: true,
        }
    }

    handleChange = (value, name) => {
        if (name === 'stockPrice') this.setStockPrice(value)
        if (name === 'funds') this.setFundsField(value)
        if (name === 'shares') this.setSharesField(value)
        if (name === 'stopLossPercentage') this.setStopLossPercentage(value)
    }

    setStockPrice = (value) => {
        const { dispatch } = this.props
        const { isEditingFunds } = this.state
        const { funds, shares } = this.props.stockForm

        if (isEditingFunds) {
            this.setSharesField(funds / value)
        } else {
            this.setFundsField(shares * value)
        }
        dispatch(updateStockPrice(value))
    }

    setFundsField = (value) => {
        const { stockPrice, shares } = this.props.stockForm
        const { dispatch } = this.props
        const { isEditingFunds } = this.state
        if (isEditingFunds) {
            if (shares !== 0) {
                this.setSharesField(0)
            }
            if (stockPrice > 0) {
                this.setSharesField(value / stockPrice)
            }
        }

        dispatch(updateFunds(value))
    }

    setSharesField = (value) => {
        const { stockPrice, funds } = this.props.stockForm
        const { dispatch } = this.props
        const { isEditingFunds } = this.state
        if (!isEditingFunds) {
            if (funds !== 0) {
                this.setFundsField(0)
            }
            if (stockPrice > 0) {
                this.setFundsField(stockPrice * value)
            }
        }
        dispatch(updateShares(Math.floor(value)))
        if (value > 0) {
            this.setTakeProfit(value)
        }
    }

    setTakeProfit = (shares) => {
        const { dispatch } = this.props
        const { earningsGoal } = this.props.tradingBuddy
        const { stockPrice } = this.props.stockForm
        const earningsPerCent = 0.01 * shares
        const occurences = (earningsGoal / earningsPerCent)
        const takeProfit = (stockPrice + (occurences * 0.01)).toFixed(2)
        dispatch(updateTakeProfit(takeProfit))
    }

    setStopLossPercentage = (value) => {
        const { dispatch } = this.props
        dispatch(updateStopLossPercentage(value))
        this.setTotalRisk(value)
    }

    setTotalRisk = (stopLossPercentage) => {
        const { dispatch } = this.props
        const { funds } = this.props.stockForm
        const totalRisk = funds * (stopLossPercentage / 100)
        dispatch(updateTotalRisk(totalRisk))
        this.setStopLimit(totalRisk)
        this.setAccountRisk(totalRisk)
    }

    setStopLimit = (totalRisk) => {
        const { stockPrice, shares } = this.props.stockForm
        const { dispatch } = this.props
        const costPerCent = 0.01 * shares
        const occurences = totalRisk / costPerCent
        dispatch(updateStopLimit((stockPrice - (occurences * 0.01)).toFixed(2)))
    }

    setAccountRisk = (value) => {
        const { dispatch, accountBalance } = this.props
        dispatch(updateAccountRisk((value / accountBalance) * 100))
    }


    handleToggleFunds = (name) => {
        const { isEditingFunds } = this.state
        if ((name === 'funds' && !isEditingFunds) || (name === 'shares' && isEditingFunds)) {
            this.setState(() => ({
                isEditingFunds: !this.state.isEditingFunds,
            }))
        }
    }

    render() {
        const {
            stockPrice,
            funds,
            shares,
            accountRisk,
            stopLossPercentage,
            totalRisk,
            stopLimit,
            takeProfit
        } = this.props.stockForm

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='flex-form'>
                        <NumberField
                            title={'Stock Price $'}
                            name={'stockPrice'}
                            value={stockPrice}
                            onChange={this.handleChange}
                        />
                        <NumberField
                            title={'Funds to Spend $'}
                            name={'funds'}
                            value={funds}
                            onChange={this.handleChange}
                            toggelFunds={this.handleToggleFunds}
                        />
                        <NumberField
                            title={'Shares to Buy'}
                            name={'shares'}
                            value={shares}
                            onChange={this.handleChange}
                            toggelFunds={this.handleToggleFunds}
                        />
                        <NumberField
                            title={'Take Profit'}
                            name={'takeProfit'}
                            value={takeProfit}
                            onChange={this.handleChange}
                            isReadOnly={true}
                        />
                    </div>
                    <div className='flex-form'>

                        <NumberField
                            title={'Stop Loss Risk %'}
                            name={'stopLossPercentage'}
                            value={stopLossPercentage}
                            onChange={this.handleChange}
                        />
                        <NumberField
                            title={'Total Risk $'}
                            name={'totalRisk'}
                            value={totalRisk}
                            onChange={this.handleChange}
                        />
                        <NumberField
                            title={'Stop Limit $'}
                            name={'stopLimit'}
                            value={stopLimit}
                            onChange={this.handleChange}
                            isReadOnly={true}
                        />
                        <NumberField
                            title={'Account Risk %'}
                            name={'accountRisk'}
                            value={accountRisk}
                            onChange={this.handleChange}
                            isReadOnly={true}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ stockForm, accountBalance, tradingBuddy }) {
    return {
        accountBalance,
        tradingBuddy,
        stockForm
    }
}

export default connect(mapStateToProps)(StockInput)