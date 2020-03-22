import { combineReducers } from 'redux'
import accountBalance from './accountBalance'
import timeAndAverage from './timeAndAverage'
import averageDailyGrowth from './averageDailyGrowth'
import tradingBuddy from './tradingBuddy'
import stockForm from './stockForm'



export default combineReducers({
    accountBalance,
    timeAndAverage,
    averageDailyGrowth,
    tradingBuddy,
    stockForm,
})