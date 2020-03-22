import {
    UPDATE_ADG_GOAL_BALANCE,
    UPDATE_ADG_TIME_SCALE,
    UPDATE_ADG_TIME_FRAME,
    UPDATE_ADG_GROWTH_RATE
} from '../actions/averageDailyGrowth'

const initialState = {
    goalBalance: 0,
    timeScale: 'Day',
    timeFrame: 1,
    growthRate: 0,
}

export default function averageDailyGrowth(state = initialState, action){
    switch(action.type){
        case UPDATE_ADG_GOAL_BALANCE:
            return {
                ...state,
                goalBalance: action.goalBalance * 1,
            }
        case UPDATE_ADG_TIME_SCALE:
            return {
                ...state,
                timeScale: action.timeScale
            }
        case UPDATE_ADG_TIME_FRAME:
            return {
                ...state,
                timeFrame: action.timeFrame * 1
            }
        case UPDATE_ADG_GROWTH_RATE:
            return {
                ...state,
                growthRate: action.growthRate * 1
            }
        default:
            return state
    }
}