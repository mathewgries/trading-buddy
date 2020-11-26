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
            detailToggle: false,
            aggDataToggle: false,
            aggData: [],
            database: []
        }
    }

    options = []

    componentDidMount = async () => {
        this.options = database.map((sym) => {
            const { ticker } = sym
            return { value: ticker, label: ticker }
        })
        this.setState({
            database: database,
            symbol: this.options[0].value,
            details: await this.getStockDetails(this.options[0].value),
            aggData: database.filter((sym) => sym.ticker === this.options[0].value)
        })
    }

    showDetails = () => {
        this.setState((prevState) => ({
            detailToggle: !prevState.detailToggle
        }))
    }

    showData = () => {
        this.setState((prevState) => ({
            aggDataToggle: !prevState.aggDataToggle
        }))
    }

    getStockDetails = async (sym) => {
        return await getDetails(sym)
    }

    handleChange = async (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
            details: await this.getStockDetails(value),
            aggdata: database.filter((sym) => sym.ticker === value)
        })
    }

    getAggData = () => {
        const { aggData } = this.state
        return (
            <div>
                {aggData.map((keys) => <pre key={keys.ticker}>{JSON.stringify(keys.results, null, 2)}</pre>)}
            </div>
        )
    }

    render() {
        const { symbol, details, detailToggle, aggData, aggDataToggle } = this.state

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
                        <button
                            className='btn btn-primary'
                            type='submit'
                            onClick={this.showDetails}
                        >
                            {!detailToggle ? 'Show Details' : 'Hide Details'}
                        </button>

                        <button
                            className='btn btn-success'
                            type='submit'
                            onClick={this.showData}
                        >
                            {!aggDataToggle ? 'Show Data' : 'Hide Data'}
                        </button>
                    </div>
                    <div>
                        {detailToggle ? <pre>{JSON.stringify(details, null, 2)}</pre> : null}
                    </div>
                    <div>
                        {aggDataToggle ? <pre>{JSON.stringify(aggData, null, 2)}</pre> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowData