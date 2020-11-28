import { LOAD_CHART_DATA } from '../actions/chartData'

export default function chartData(state = {}, action) {
    switch (action.type) {
        case LOAD_CHART_DATA:
            return {
                ...state,
                ...action.chartData
            }
        default:
            return state
    }
}