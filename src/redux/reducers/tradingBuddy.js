import {UPDATE_TB_GROWTH_RATE, UPDATE_TB_EARNINGS_GOAL} from '../actions/tradingBuddy'

const initialState = {
    growthRate: 0,
    earningsGoal: 0,
}

export default function tradingBuddy(state = initialState, action){
    switch(action.type){
        case UPDATE_TB_GROWTH_RATE:
            return {
                ...state,
                growthRate: action.growthRate * 1
            }
        case UPDATE_TB_EARNINGS_GOAL:
            return {
                ...state,
                earningsGoal: action.earningsGoal * 1
            }
        default:
            return state
    }
}