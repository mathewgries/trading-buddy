import React, { Component } from 'react'
import { connect } from 'react-redux'
import AccountBalance from './AccountBalance'
import StockInput from './StockInput'
import NumberField from '../containers/NumberField'
import { updateGrowthRate, updateEarnings } from '../redux/actions/tradingBuddy'

class TradingBuddy extends Component {

    handleAccountFormChange = (value, name) => {
        if (name === 'growthRate') {
            this.props.dispatch(updateGrowthRate(value))
            this.setGoalBalance(value)
        }
    }

    setGoalBalance = (value) => {
        const { accountBalance } = this.props
        this.props.dispatch(updateEarnings(accountBalance * (value / 100)))
    }

    render() {
        const { growthRate, earningsGoal } = this.props.tradingBuddy

        return (
            <div>
                <form onSubmit={this.handleGoalBalance}>
                    <h4>Earning Goal</h4>
                    <hr />
                    <div className='flex-form'>
                        <AccountBalance />
                        <NumberField
                            title={'Growth Rate %'}
                            name='growthRate'
                            value={growthRate}
                            onChange={this.handleAccountFormChange}
                        />
                        <NumberField
                            title={'Earnings Goal $'}
                            name='earningsGoal'
                            value={earningsGoal}
                            onChange={this.handleAccountFormChange}
                            isReadOnly={true}
                        />
                    </div>
                </form>
                <hr />
                <div>
                    <h4>Calculate Position</h4>
                    <StockInput />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ tradingBuddy, accountBalance }) {
    return {
        accountBalance,
        tradingBuddy
    }
}

export default connect(mapStateToProps)(TradingBuddy)