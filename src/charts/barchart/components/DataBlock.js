import React, { Component } from 'react'
// import DataBar from './DataBar'

const CanvasContext = React.createContext("default");

class DataBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CanvasContext.Consumer>
                    {ctx => {
                        ctx.moveTo(0, 0);
                        ctx.lineTo(200, 100);
                        ctx.stroke();
                    }}
                </CanvasContext.Consumer>
            </div>
        )
    }
}

export default DataBlock