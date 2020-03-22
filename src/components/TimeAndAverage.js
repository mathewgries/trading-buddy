import React, { Component } from 'react'
import { connect } from 'react-redux'
import NumberField from '../containers/NumberField'
import { calculateGOT } from '../helpers/calculations'
import {
    updateGrowthRate,
    updateTimeScale,
    updateTimeFrame,
    updateResults
} from '../redux/actions/timeAndAverage'


class TimeAndAverage extends Component {

    handleChange = (value, name) => {
        if (name === 'growthRate') this.props.dispatch(updateGrowthRate(value))
        if (name === 'timeScale') this.props.dispatch(updateTimeScale(value))
        if (name === 'timeFrame') this.props.dispatch(updateTimeFrame(value))
    }

    handleTimeFrameChange = (e) => {
        const { value } = e.target
        this.props.dispatch(updateTimeScale(value))
    }

    handleCalculation = (e) => {
        e.preventDefault()
        const { growthRate, timeScale, timeFrame } = this.props.timeAndAverage
        const { accountBalance } = this.props
        this.props.dispatch(
            updateResults(
                calculateGOT(accountBalance, growthRate, timeScale, timeFrame)
            )
        )
    }

    render() {
        const {
            growthRate,
            timeScale,
            timeFrame,
            results
        } = this.props.timeAndAverage

        return (
            <div className='form-container'>
                <h4>Time and Average</h4>
                <form onSubmit={this.handleCalculation} >
                    <NumberField
                        title={'Growth Rate %'}
                        name={'growthRate'}
                        value={growthRate}
                        onChange={this.handleChange}
                    />
                    <div className='form-group'>
                        <label>Time Scale</label>
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
                        <button className='btn btn-info'>Calculate</button>
                    </div>
                    <NumberField
                        title={'Results $'}
                        name={'results'}
                        value={results}
                        isReadOnly={true}
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ timeAndAverage, accountBalance }) {
    return {
        accountBalance,
        timeAndAverage
    }
}

export default connect(mapStateToProps)(TimeAndAverage)