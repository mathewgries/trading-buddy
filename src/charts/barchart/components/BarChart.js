import React, { Component } from 'react'
import '../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';


class BarChart extends Component {
    render() {
        return (
            <div className="App">
                <XYPlot
                    width={300}
                    height={300}>
                    <HorizontalGridLines />
                    <LineSeries
                        color="red"
                        data={[
                            { x: 1, y: 10 },
                            { x: 2, y: 5 },
                            { x: 3, y: 15 }
                        ]} />
                    <XAxis title="X" />
                    <YAxis />
                </XYPlot>
            </div>
        );
    }
}

export default BarChart