import {
    UPDATE_SF_STOCK_PRICE, 
    UPDATE_SF_FUNDS, 
    UPDATE_SF_SHARES,
    UPDATE_SF_ACCOUNT_RISK,
    UPDATE_SF_STOP_LOSS_PERC,
    UPDATE_SF_TOTAL_RISK,
    UPDATE_SF_STOP_LIMIT,
    UPDATE_SF_TAKE_PROFIT
} from '../actions/stockForm'

const initialState = {
    stockPrice: 0,
    funds: 0,
    shares: 0,
    accountRisk: 0,
    stopLossPercentage: 0,
    totalRisk: 0,
    stopLimit: 0,
    takeProfit: 0,
}

export default function stockForm(state = initialState, action){
    switch(action.type){
        case UPDATE_SF_STOCK_PRICE:
            return {
                ...state,
                stockPrice: action.stockPrice * 1,
            }
        case UPDATE_SF_FUNDS:
            return {
                ...state,
                funds: action.funds * 1
            }
        case UPDATE_SF_SHARES:
            return {
                ...state,
                shares: action.shares * 1
            }
        case UPDATE_SF_ACCOUNT_RISK:
            return {
                ...state,
                accountRisk: action.accountRisk * 1
            }
        case UPDATE_SF_STOP_LOSS_PERC:
            return {
                ...state,
                stopLossPercentage: action.stopLossPercentage * 1
            }
        case UPDATE_SF_TOTAL_RISK:
            return {
                ...state,
                totalRisk: action.totalRisk * 1
            }
        case UPDATE_SF_STOP_LIMIT:
            return {
                ...state,
                stopLimit: action.stopLimit * 1
            }
        case UPDATE_SF_TAKE_PROFIT:
            return {
                ...state,
                takeProfit: action.takeProfit * 1
            }
        default:
            return state
    }
}

