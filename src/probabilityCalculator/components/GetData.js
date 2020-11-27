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
            resultCount: 0,
            details: {},
            toggleDetails: false,
            toggleData: false,
            data: []
        }
    }

    timespanArr = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value,
            toggleDetails: false,
            toggleData: false
        })
    }

    handleToggle = (e) => {
        const { name } = e.target
        this.setState((prevState) => ({
            [name]: !prevState[name]
        }))
    }

    handleGetDetails = async () => {
        const { details, ticker } = this.state
        if (details.symbol === ticker) {
            this.setState((prevState) => ({
                toggleDetails: !prevState.toggleDetails
            }))
        } else if (details.symbol !== ticker) {
            const response = await getDetails(ticker)
            this.setState({
                details: response,
                toggleDetails: true
            })
        }
    }

    handleGetData = async () => {
        const { data, ticker } = this.state
        if (data.ticker === ticker) {
            this.setState((prevState) => ({
                toggleData: !prevState.toggleData
            }))
        } else if (data.ticker !== ticker) {
            const response = await getData(this.state)
            this.setState({
                data: response,
                resultCount: response.results.length,
                toggleData: true
            })
        }
        // const response = await getData(this.state)
        // this.setState({
        //     data: response,
        //     resultCount: response.results.length
        // })
    }

    diableGetData() {
        const { ticker, startDate, endDate } = this.state
        return (
            (ticker === '' || startDate === '' || endDate === '') ||
            (startDate > endDate)
        )
    }

    render() {

        const {
            ticker,
            details,
            startDate,
            endDate,
            timespan,
            multiplier,
            data,
            resultCount,
            toggleDetails,
            toggleData
        } = this.state

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
                        name='toggleDetails'
                        onClick={this.handleGetDetails}
                        disabled={ticker === '' ? true : false}
                    >
                        {toggleDetails ? 'Hide Details' : 'Show Details'}
                    </button>
                    <button
                        className='btn btn-success'
                        type='submit'
                        onClick={this.handleGetData}
                        disabled={this.diableGetData() ? true : false}
                    >
                        {toggleData ? 'Hide Data' : 'Show Data'}
                    </button>
                </div>
                <div>
                    <p>Results: {resultCount}</p>
                </div>
                <div>
                    {toggleDetails ? <pre>{JSON.stringify(details, null, 2)}</pre> : null}
                </div>
                <div>
                    {toggleData ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
                </div>
            </div>
        )
    }
}

export default GetData