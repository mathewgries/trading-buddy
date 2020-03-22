export const UPDATE_TB_GROWTH_RATE = 'UPDATE_TB_GROWTH_RATE'
export const UPDATE_TB_EARNINGS_GOAL = 'UPDATE_TB_EARNINGS_GOAL'

export function updateGrowthRate(growthRate){
    return {
        type: UPDATE_TB_GROWTH_RATE,
        growthRate
    }
}

export function updateEarnings(earningsGoal){
    return {
        type: UPDATE_TB_EARNINGS_GOAL,
        earningsGoal
    }
}