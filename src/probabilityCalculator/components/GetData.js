import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
import { getChartData } from '../../api/get.js'
// import { handleLoadChartData } from '../../redux/probabilityCalculator/actions/chartData'
import CandleStickChart from '../../charts/CandleStickChart'

import '../style.css'

const timespanArr = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']

const getCurrentDate = (date, sub = 0) => {
    var d = date.getDate() - sub;
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}

const GetData = () => {
    const [loading, setLoading] = useState(true)
    const [userInput, setUserInput] = useState({
        ticker: 'AAPL',
        multiplier: '1',
        timespan: 'minute',
        startDate: getCurrentDate(new Date(), 1),
        endDate: getCurrentDate(new Date()),
    })

    const [chartData, setChartData] = useState(null)
    useEffect(() => {
        handleGetChartData()
    }, [userInput])

    const handleGetChartData = async () => {
        const response = await getChartData(userInput)
        if(response.status !== 'ERROR'){
            setChartData(response)
            setLoading(false)
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setUserInput({ ...userInput, [name]: value })
    }

    return (
        <div>
            <div className='data-fields'>
                <div className='form-group'>
                    <label>Symbol</label>
                    <input
                        className='form-control'
                        type='text'
                        name={'ticker'}
                        value={userInput.ticker}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <label>Start Date</label>
                    <input
                        className='form-control'
                        type='date'
                        name={'startDate'}
                        value={userInput.startDate}
                        onChange={(e) => handleChange(e)}
                        max={getCurrentDate(new Date())}
                    />
                </div>
                <div className='form-group'>
                    <label>End Date</label>
                    <input
                        className='form-control'
                        type='date'
                        name={'endDate'}
                        value={userInput.endDate}
                        onChange={(e) => handleChange(e)}
                        min={userInput.startDate}
                        max={getCurrentDate(new Date())}
                    />
                </div>
                <div className='form-group'>
                    <label>Timespan</label>
                    <select
                        className='form-control'
                        name='timespan'
                        value={userInput.timespan}
                        onChange={(e) => handleChange(e)}
                    >
                        {timespanArr.map((agg) =>
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
                        value={userInput.multiplier}
                        min={1}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className='form-group'>
                <button
                    className='btn btn-primary'
                    type='submit'
                    name='toggleDetails'
                // onClick={this.handleGetDetails}
                // disabled={ticker === '' ? true : false}
                >
                    Show Details
                </button>
                {/* <button
                    className='btn btn-success'
                    type='submit'
                    onClick={() => handleGetChartData()}
                // disabled={this.diableGetData() ? true : false}
                >
                    Show Data
                </button> */}
            </div>
            {/* <div>
                {
                    !chartData
                        ? null
                        : <pre>{JSON.stringify(chartData, null, 2)}</pre>
                }
            </div> */}
            <div>
                {loading
                    ? <div>Loading...</div>
                    : <CandleStickChart chartData={chartData} />}
            </div>
        </div >
    )
}

export default GetData