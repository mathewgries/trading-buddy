import {
    UPDATE_TA_GROWTH_RATE,
    UPDATE_TA_TIME_SCALE,
    UPDATE_TA_TIME_FRAME,
    UPDATE_TA_RESULTS
} from '../actions/timeAndAverage'

const initialState = {
    growthRate: 0,
    timeScale: 'Day',
    timeFrame: 1,
    results: 0,
}

export default function timeAndAverage(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TA_GROWTH_RATE:
            return {
                ...state,
                growthRate: action.growthRate * 1
            }
        case UPDATE_TA_TIME_SCALE:
            return {
                ...state,
                timeScale: action.timeScale
            }
        case UPDATE_TA_TIME_FRAME:
            return {
                ...state,
                timeFrame: action.timeFrame * 1
            }
        case UPDATE_TA_RESULTS:
            return {
                ...state,
                results: action.results * 1
            }
        default:
            return state
    }
}