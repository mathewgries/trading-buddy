import React, { Component } from 'react'
import { getDetails, getData } from '../../api/get.js'
import '../style.css'

class GetData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rateLimit: false,
            ticker: '',
            multiplier: '1',
            timespan: 'minute',
            startDate: '',
            endDate: '',
            resultCount: 0,
            details: {},
            toggleDetails: false,
            data: []
        }
    }

    timespanArr = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value,
            toggleDetails: false
        })
    }

    handleGetDetails = async () => {
        const { details, ticker } = this.state
        if (details.symbol === ticker) {
            this.setState((prevState) => ({
                toggleDetails: !prevState.toggleDetails
            }))
        } else if (details.symbol !== ticker) {
            const response = await getDetails(ticker)
            if (response.status === 'ERROR') {
                this.setState({ rateLimit: true })
            } else {
                this.setState({
                    details: response,
                    toggleDetails: true
                })
            }
        }
    }

    handleGetData = async () => {
        const response = await getData(this.state)
        if (response.status === 'ERROR') {
            this.setState({ rateLimit: true })
        } else {
            this.setState({
                rateLimit: false,
                data: response,
                resultCount: response.results.length
            })
        }

    }

    handleRateLimit = () => {

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
            rateLimit,
            ticker,
            details,
            startDate,
            endDate,
            timespan,
            multiplier,
            data,
            resultCount,
            toggleDetails
        } = this.state

        return (
            <div>
                <div>
                    {rateLimit ? <div className='text-danger'>Rate Limit Exceeded</div> : null}
                </div>
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
                        Show Data
                    </button>
                </div>
                <div>
                    <p>Results: {resultCount}</p>
                </div>
                <div>
                    {toggleDetails ? <pre>{JSON.stringify(details, null, 2)}</pre> : null}
                </div>
                <div>
                    {<pre>{JSON.stringify(data, null, 2)}</pre>}
                </div>
            </div>
        )
    }
}

export default GetData