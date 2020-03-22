const TRADING_DAYS_PER_YEAR = 253
const TRADING_DAYS_PER_MONTH = 21
const TRADING_DAYS_PER_WEEK = 5

/**
 * 
 * @param {*} startBalance 
 * @param {*} growthRate 
 * @param {*} timeScale 
 * @param {*} timeFrame 
 */
function calculateGOT(startBalance, growthRate, timeScale, timeFrame) {
    const rate = convertPercent(growthRate)
    const days = timeScale.toUpperCase() === 'DAY'
        ? timeFrame
        : convertTimeFrameToDays(timeScale, timeFrame)

    return getEndingBalance(startBalance * 1, rate, days)
}

/**
 * 
 * @param {*} accountBalance 
 * @param {*} goalBalance 
 * @param {*} timeScale 
 * @param {*} timeFrame 
 */
function calculateGrowthRate(accountBalance, goalBalance, timeScale, timeFrame) {
    const days = timeScale.toUpperCase() === 'DAY'
        ? timeFrame
        : convertTimeFrameToDays(timeScale, timeFrame)

    const result = Math.round((Math.pow(goalBalance / accountBalance, 1 / days) - 1) * 100)
    return result
}

/**
 * 
 * @param {*} s 
 * @param {*} r 
 * @param {*} d 
 */
function getEndingBalance(s, r, d) {
    let result = s
    for (let i = 0; i < d; i++) {
        const percentValue = r * result
        result = result + percentValue
    }

    return result.toFixed(2)
}

/**
 * 
 * @param {*} gr 
 */
function convertPercent(gr) {
    return gr / 100
}

/**
 * 
 * @param {*} timeScale 
 * @param {*} timeFrame 
 */
function convertTimeFrameToDays(timeScale, timeFrame) {
    let result
    switch (timeScale.toUpperCase()) {
        case 'WEEK':
            result = timeFrame * TRADING_DAYS_PER_WEEK
            break
        case 'MONTH':
            result = timeFrame * TRADING_DAYS_PER_MONTH
            break
        case 'YEAR':
            result = timeFrame * TRADING_DAYS_PER_YEAR
            break
        default:
            break;
    }
    return result
}


module.exports = {
    calculateGOT,
    calculateGrowthRate
}