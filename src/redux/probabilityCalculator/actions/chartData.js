import { getChartData } from '../../../api/get.js'
export const LOAD_CHART_DATA = 'LOAD_CHART_DATA'


export function handleLoadChartData(requestParams){
    return async (dispatch) => {
        return await getChartData(requestParams)
        .then((chartData) => dispatch(loadChartData(chartData)))
    }
}

function loadChartData(chartData){
    return {
        type: LOAD_CHART_DATA,
        chartData,
    }
}