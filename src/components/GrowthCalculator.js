import React, { Component } from 'react'
import TimeAndAverage from './TimeAndAverage'
import AverageDailyGrowth from './AverageDailyGrowth'
import AccountBalance from '../components/AccountBalance'

export default class GrowthCalculator extends Component {
    render() {
        return (
            <div>
                <h3>Growth Calculator</h3>
                <div>
                    <AccountBalance/>
                </div>
                <hr />
                <div className='main-display'>
                    <TimeAndAverage />
                    <AverageDailyGrowth />
                </div>
            </div>
        )
    }
}