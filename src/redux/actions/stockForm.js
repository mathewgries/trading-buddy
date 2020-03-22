export const UPDATE_SF_STOCK_PRICE = 'UPDATE_SF_STOCK_PRICE'
export const UPDATE_SF_FUNDS = 'UPDATE_SF_FUNDS'
export const UPDATE_SF_SHARES = 'UPDATE_SF_SHARES'
export const UPDATE_SF_ACCOUNT_RISK = 'UPDATE_SF_ACCOUNT_RISK'
export const UPDATE_SF_STOP_LOSS_PERC = 'UPDATE_SF_STOP_LOSS_PERC'
export const UPDATE_SF_TOTAL_RISK = 'UPDATE_SF_TOTAL_RISK'
export const UPDATE_SF_STOP_LIMIT = 'UPDATE_SF_STOP_LIMIT'
export const UPDATE_SF_TAKE_PROFIT = 'UPDATE_SF_TAKE_PROFIT'

export function updateStockPrice(stockPrice){
    return {
        type: UPDATE_SF_STOCK_PRICE,
        stockPrice
    }
}

export function updateFunds(funds){
    return {
        type: UPDATE_SF_FUNDS,
        funds
    }
}

export function updateShares(shares){
    return {
        type: UPDATE_SF_SHARES,
        shares
    }
}

export function updateAccountRisk(accountRisk){
    return {
        type: UPDATE_SF_ACCOUNT_RISK,
        accountRisk
    }
}

export function updateStopLossPercentage(stopLossPercentage){
    return {
        type: UPDATE_SF_STOP_LOSS_PERC,
        stopLossPercentage
    }
}

export function updateTotalRisk(totalRisk){
    return {
        type: UPDATE_SF_TOTAL_RISK,
        totalRisk
    }
}


export function updateStopLimit(stopLimit){
    return {
        type: UPDATE_SF_STOP_LIMIT,
        stopLimit
    }
}


export function updateTakeProfit(takeProfit){
    return {
        type: UPDATE_SF_TAKE_PROFIT,
        takeProfit
    }
}