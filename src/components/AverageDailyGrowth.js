import React, { Component } from 'react'
import { connect } from 'react-redux'
import NumberField from '../containers/NumberField'
import { calculateGrowthRate } from '../helpers/calculations'
import {
    updateGoalBalance,
    updateTimeScale,
    updateTimeFrame,
    updateGrowthRate
} from '../redux/actions/averageDailyGrowth'

class AverageDailyGrowth extends Component {

    // handleGrowthRateCalculation = (e) => {
    //     e.preventDefault()
    //     const {goalBalance, timeScale, timeFrame } = this.state
    //     const { accountBalance } = this.props

    //     this.setState(() => ({
    //         growthRate: calculateGrowthRate(accountBalance, goalBalance, timeScale, timeFrame)
    //     }))
    // }

    handleChange = (value, name) => {
        if (name === 'goalBalance') this.props.dispatch(updateGoalBalance(value))
        if (name === 'timeScale') this.props.dispatch(updateTimeScale(value))
        if (name === 'timeFrame') this.props.dispatch(updateTimeFrame(value))
    }

    handleTimeFrameChange = (e) => {
        const { value } = e.target
        this.props.dispatch(updateTimeScale(value))
    }

    handleCalculation = (e) => {
        e.preventDefault()
        const { goalBalance, timeScale, timeFrame } = this.props.averageDailyGrowth
        const { accountBalance } = this.props
        this.props.dispatch(
            updateGrowthRate(
                calculateGrowthRate(accountBalance, goalBalance, timeScale, timeFrame)
            )
        )
    }

    render() {
        const { 
            goalBalance, 
            timeScale, 
            timeFrame, 
            growthRate 
        } = this.props.averageDailyGrowth

        return (
            <div className='form-container'>
                <header>
                    <h4>Average Daily Growth</h4>
                </header>
                <form onSubmit={this.handleCalculation}>
                    <NumberField
                        title={'Goal Balance $'}
                        name={'goalBalance'}
                        value={goalBalance}
                        onChange={this.handleChange}
                    />
                    <div className='form-group'>
                        <label>Choose Time Scale</label>
                        <select
                            value={timeScale}
                            className='form-control'
                            name='timeScale'
                            onChange={this.handleTimeFrameChange}
                        >
                            <option value='Day'>Days</option>
                            <option value='Month'>Months</option>
                            <option value='Week'>Weeks</option>
                            <option value='Year'>Years</option>
                        </select>
                    </div>
                    <NumberField
                        title={'Time Frame'}
                        name={'timeFrame'}
                        value={timeFrame}
                        onChange={this.handleChange}
                    />
                    <div className='form-group'>
                        <button className='btn btn-info' >Calculate</button>
                    </div>
                    <NumberField
                        title={'Growth Rate %'}
                        name={'growthRate'}
                        value={growthRate}
                        onChange={this.handleChange}
                        isReadOnly={true}
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ averageDailyGrowth, accountBalance }) {
    return {
        accountBalance,
        averageDailyGrowth,
    }
}

export default connect(mapStateToProps)(AverageDailyGrowth)