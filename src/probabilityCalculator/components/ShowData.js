import React, { Component } from 'react'
import database from '../../data'
import { getDetails } from '../../api/get.js'

// const milliseconds = 1577941200000
// const dateObject = new Date(milliseconds)
// console.log(dateObject.toLocaleString())

class ShowData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symbol: '',
            details: {},
            aggData: {},
            gainPercent: 5,
            movers: [],
            database: [],
            detailToggle: false,
            aggDataToggle: false,
            moversToggle: false
        }
    }

    options = []

    componentDidMount = async () => {
        this.options = database.map((sym) => {
            const { ticker } = sym
            return { value: ticker, label: ticker }
        })

        const openTicker = database.filter((sym) => sym.ticker === this.options[0].value)
        this.setState({
            database: database,
            symbol: this.options[0].value,
            details: await this.getStockDetails(this.options[0].value),
            aggData: openTicker[0],
            movers: this.setMovers(openTicker[0].results)
        })
    }

    handleChange = async (e) => {
        const { name, value } = e.target
        if (name === 'symbol') {
            const openTicker = database.filter((sym) => sym.ticker === value)
            this.setState({
                [name]: value,
                details: await this.getStockDetails(value),
                aggData: openTicker[0],
                movers: this.setMovers(openTicker[0].results)
            })
        } else {
            const { aggData } = this.state
            this.setState({
                [name]: value,
                movers: this.setMovers(aggData.results)
            })
        }

    }

    handleToggle = (e) => {
        const { name } = e.target
        this.setState((prevState) => ({
            [name]: !prevState[name]
        }))
    }

    getStockDetails = async (sym) => {
        return await getDetails(sym)
    }

    getAggData = () => {
        const { aggData } = this.state
        return (
            <div>
                {aggData.map((keys) => <pre key={keys.ticker}>{JSON.stringify(keys.results, null, 2)}</pre>)}
            </div>
        )
    }

    setMovers = (data) => {
        const { gainPercent } = this.state
        let matches = []
        data.forEach((value, index, elements) => {
            if (elements.length - 1 !== index) {
                const current = elements[index]
                const next = elements[index + 1]

                const close = parseFloat(current.c)
                const hod = parseFloat(next.h)
                const perCalc = ((hod - close) / close) * 100

                if (perCalc >= gainPercent) {
                    matches.push({ close: current, hod: next })
                }
            }
        })
        return matches
    }

    render() {
        const {
            symbol,
            details,
            detailToggle,
            aggData,
            aggDataToggle,
            movers,
            moversToggle,
            gainPercent
        } = this.state

        if (symbol === '') {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div>
                    <div className='form-group'>
                        <label>Select Symbol</label>
                        <select
                            className='form-control'
                            name='symbol'
                            value={symbol}
                            onChange={this.handleChange}
                        >
                            {this.options.map((sym) =>
                                <option
                                    key={sym.value}
                                    value={sym.value}
                                >
                                    {sym.value}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Aggregate Span</label>
                        <input
                            className='form-control'
                            type='number'
                            name={'gainPercent'}
                            value={gainPercent}
                            min={1}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button
                            className='btn btn-primary'
                            type='submit'
                            name={'detailToggle'}
                            onClick={this.handleToggle}
                        >
                            {!detailToggle ? 'Show Details' : 'Hide Details'}
                        </button>

                        <button
                            className='btn btn-success'
                            type='submit'
                            name={'aggDataToggle'}
                            onClick={this.handleToggle}
                        >
                            {!aggDataToggle ? 'Show Data' : 'Hide Data'}
                        </button>
                        <button
                            className='btn btn-info'
                            type='submit'
                            name={'moversToggle'}
                            onClick={this.handleToggle}
                        >
                            {!moversToggle ? 'Show Movers' : 'Hide Movers'}
                        </button>
                    </div>
                    <div>
                        {detailToggle ? <pre>{JSON.stringify(details, null, 2)}</pre> : null}
                    </div>
                    <div>
                        {aggDataToggle ? <pre>{JSON.stringify(aggData, null, 2)}</pre> : null}
                    </div>
                    <div>
                        {moversToggle ? <pre>{JSON.stringify(movers, null, 2)}</pre> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowData