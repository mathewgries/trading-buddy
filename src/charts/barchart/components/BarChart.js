import React, { Component } from 'react'
import '../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries } from 'react-vis';

class BarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            chartData: {}
        }
    }

    componentDidMount = () => {
        this.setState({ data: this.props.data })
    }


    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div>
                <XYPlot
                    xType="ordinal"
                    // stackBy='y'
                    width={800}
                    height={300}
                    margin={{ left: 100 }}>
                    <HorizontalGridLines />
                    <VerticalBarSeries
                        // cluster={'prev'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'#a1aeff'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.prevVolume[0].vol
                                }
                            })
                        }
                    />
                    <VerticalBarSeries
                        // cluster={'prev'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'#8394fc'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.prevVolume[1].vol
                                }
                            })
                        }
                    />
                    <VerticalBarSeries
                        // cluster={'prev'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'#7084ff'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.prevVolume[2].vol
                                }
                            })
                        }
                    />
                    <VerticalBarSeries
                        // cluster={'prev'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'#546cff'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.prevVolume[3].vol
                                }
                            })
                        }
                    />
                    <VerticalBarSeries
                        // cluster={'prev'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'#3b56ff'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.prevVolume[4].vol
                                }
                            })
                        }
                    />
                    <VerticalBarSeries
                        // cluster={'close'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'#5f75b3'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.closeVolume
                                }
                            })
                        }
                    />
                    <VerticalBarSeries
                        // cluster={'close'}
                        barWidth={0.5}
                        stroke={'blue'}
                        opacity={0.75}
                        fill={'orange'}
                        data={
                            data.map((val) => {
                                return {
                                    x: (val.closeDate).substring(0, (val.closeDate).indexOf(',')),
                                    y: val.hodVolume
                                }
                            })
                        }
                    />
                    <XAxis title="Date" />
                    <YAxis title="Volume" />
                </XYPlot>
            </div>
        );
    }
}

export default BarChart