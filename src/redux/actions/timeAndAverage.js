export const UPDATE_TA_GROWTH_RATE = 'UPDATE_TA_GROWTH_RATE'
export const UPDATE_TA_TIME_SCALE = 'UPDATE_TA_TIME_SCALE'
export const UPDATE_TA_TIME_FRAME = 'UPDATE_TA_TIME_FRAME'
export const UPDATE_TA_RESULTS = 'UPDATE_TA_RESULTS'

export function updateGrowthRate(growthRate){
    return {
        type: UPDATE_TA_GROWTH_RATE,
        growthRate
    }
}

export function updateTimeScale(timeScale){
    return {
        type: UPDATE_TA_TIME_SCALE,
        timeScale
    }
}

export function updateTimeFrame(timeFrame){
    return {
        type: UPDATE_TA_TIME_FRAME,
        timeFrame
    }
}

export function updateResults(results){
    return {
        type: UPDATE_TA_RESULTS,
        results
    }
}