export const UPDATE_ADG_GOAL_BALANCE = 'UPDATE_ADG_GOAL_BALANCE'
export const UPDATE_ADG_TIME_SCALE = 'UPDATE_ADG_TIME_SCALE'
export const UPDATE_ADG_TIME_FRAME = 'UPDATE_ADG_TIME_FRAME'
export const UPDATE_ADG_GROWTH_RATE = 'UPDATE_ADG_GROWTH_RATE'

export function updateGoalBalance(goalBalance){
    return {
        type: UPDATE_ADG_GOAL_BALANCE,
        goalBalance
    }
}

export function updateTimeScale(timeScale){
    return {
        type: UPDATE_ADG_TIME_SCALE,
        timeScale
    }
}

export function updateTimeFrame(timeFrame){
    return {
        type: UPDATE_ADG_TIME_FRAME,
        timeFrame
    }
}

export function updateGrowthRate(growthRate){
    return {
        type: UPDATE_ADG_GROWTH_RATE,
        growthRate
    }
}
