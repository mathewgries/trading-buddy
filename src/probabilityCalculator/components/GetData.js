import React, { Component } from 'react'
import { getDetails, getData } from '../../api/get.js'
import '../style.css'

class GetData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticker: '',
            multiplier: '1',
            timespan: 'minute',
            startDate: '',
            endDate: '',
            details: {},
            data: []
        }
    }

    timespanArr = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    getStockDetails = async () => {
        const { ticker } = this.state
        const response = await getDetails(ticker)
        this.setState({ details: response })
    }

    handleGetData = async () => {
        const { ticker, startDate, endDate } = this.state
        const response = await getData(this.state)
        this.setState((prevState) => ({
            data: response
        }))
    }

    diableGetData(){
        const {ticker, startDate, endDate } = this.state
        return (
            (ticker === '' || startDate === '' || endDate === '') ||
            (startDate > endDate)
        )
    }

    render() {
        const { ticker, details, startDate, endDate, timespan, multiplier, data } = this.state
        return (
            <div>
                <div className='data-fields'>
                    <div className='form-group'>
                        <label>Symbol</label>
                        <input
                            className='form-control'
                            type='text'
                            name={'ticker'}
                            value={ticker}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Start Date</label>
                        <input
                            className='form-control'
                            type='date'
                            name={'startDate'}
                            value={startDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>End Date</label>
                        <input
                            className='form-control'
                            type='date'
                            name={'endDate'}
                            value={endDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Timespan</label>
                        <select
                            className='form-control'
                            name='timespan'
                            value={timespan}
                            onChange={this.handleChange}
                        >
                            {this.timespanArr.map((agg) =>
                                <option
                                    key={agg}
                                    value={agg}
                                >
                                    {agg}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Aggregate Span</label>
                        <input
                            className='form-control'
                            type='number'
                            name={'multiplier'}
                            value={multiplier}
                            min={1}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <button
                        className='btn btn-primary'
                        type='submit'
                        onClick={this.getStockDetails}
                        disabled={ticker === '' ? true : false}
                    >
                        Get Details
                    </button>
                    <button
                        className='btn btn-success'
                        type='submit'
                        onClick={this.handleGetData}
                        disabled={this.diableGetData() ? true : false}
                    >
                        Get Data
                    </button>
                </div>
                <pre>{JSON.stringify(details, null, 2)}</pre>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        )
    }
}

export default GetData