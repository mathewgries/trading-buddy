import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAccountBalance } from '../redux/actions/accountBalance'
import NumberField from '../containers/NumberField'

class AccountBalance extends Component {

    handleChange = (value) => {
        this.props.dispatch(updateAccountBalance(value))
    }

    render() {
        const { accountBalance } = this.props

        return (
            <div>
                <NumberField
                    title={'Account Balance $'}
                    value={accountBalance}
                    name={'accountBalance'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

function mapStateToProps({ accountBalance }) {
    return {
        accountBalance
    }
}

export default connect(mapStateToProps)(AccountBalance)