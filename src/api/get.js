import {requestHandler} from './handleRequest.js'

// https://api.polygon.io/v1/open-close/AAPL/2020-10-14?apiKey=VvY5VBdSwesmpbxpx4hCEzxBl3bkGpXh
export async function getDetails(ticker){
    const req = '/v1/meta/symbols/'+ticker+'/company?'
    return await requestHandler(req)
}

// v2/aggs/ticker/AAPL/range/1/day/2020-10-01/2020-10-31?sort=asc&limit=10&apiKey=eCahHWlyNG0rOGbTSDjy_rG0tV1_2MQ7
export async function getChartData(data){
    const {ticker, multiplier, timespan, startDate, endDate } = data
    const req = '/v2/aggs/ticker/'+ticker+'/range/'+multiplier+'/'+timespan+'/'+startDate+'/'+endDate+'?sort=asc&limit=50000&'
    return await requestHandler(req)
}