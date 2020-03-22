import React, { Component } from 'react'

export default class NumberField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            isReadOnly: false,
        }
    }

    componentDidMount = () => {
        if (this.props.isReadOnly) {
            this.setState(() => ({
                isReadOnly: this.props.isReadOnly
            }))
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.props.onChange(value, name)
    }

    toCurrency = (number) => {
        return new Intl.NumberFormat().format(number);
    }

    toggleEditing = () => {
        const { isEditing } = this.state
        if(!isEditing && this.props.toggelFunds){
            this.props.toggelFunds(this.props.name)
        }
        this.setState({ isEditing: !this.state.isEditing });

    }

    render() {
        const { name, value, title } = this.props
        const { isEditing, isReadOnly } = this.state
        return (
            <div className='form-group'>
                <label>{title}</label>
                {isEditing && !isReadOnly ? (
                    <input
                        className='form-control'
                        type='number'
                        name={name}
                        value={value}
                        onChange={this.handleChange}
                        onBlur={this.toggleEditing}
                        min={0}
                    />
                ) : (
                        <input
                            className='form-control'
                            type='text'
                            name={name}
                            value={this.toCurrency(value)}
                            onFocus={this.toggleEditing}
                            readOnly
                        />
                    )}

            </div>
        )
    }
}