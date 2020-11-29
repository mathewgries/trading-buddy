import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

const CandleStickChart = (props) => {
    const [series, setSeries] = useState([{
        data: []
    }])

    useEffect(() => {
        const results = props.chartData.results
        const data = results.map((val) => {
            return {
                x: new Date(val.t),
                y: [val.o, val.h, val.l, val.c]
            }
        })
        setSeries([{
            data
        }])
    }, [props.chartData])



    const [options, setOptions] = useState({
        chart: {
            type: 'candlestick',
            height: 350,
            id: 'candles',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
        },
        animations: {
            eanabled: false
        },
        title: {
            text: 'CandleStick',
            align: 'left'
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#3C90EB',
                    downward: '#DF7D46'
                }
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (value) {
                    return dateFormat(value)
                }
            }
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    })

    function dateFormat(val) {
        return new Date(val).toLocaleDateString("en-US")
    }


    return (
        <div className='chart-box'>
            <Chart
                options={options}
                series={series}
                type="candlestick"
                height={350}
            />
        </div>
    )
}

export default CandleStickChart