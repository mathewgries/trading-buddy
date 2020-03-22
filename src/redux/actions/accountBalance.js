export const UPDATE_ACCOUNT_BALANCE = 'UPDATE_ACCOUNT_BALANCE'

export function updateAccountBalance(accountBalance){
    return {
        type: UPDATE_ACCOUNT_BALANCE,
        accountBalance
    }
}