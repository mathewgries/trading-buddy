import React, {Component} from 'react'

class DataBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            label: 'Volume',
            value: 32
        }
    }
    
    render(){
        const { label, value } = this.state
        return(
            <div>
                <p>Label: {label}</p>
                <p>Value: {value}</p>
            </div>
        )
    }
}

export default DataBar