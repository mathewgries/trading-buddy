import { UPDATE_ACCOUNT_BALANCE } from '../actions/accountBalance'

export default function accountBalance(state = 0 , action) {
    switch (action.type) {
        case UPDATE_ACCOUNT_BALANCE:
            return action.accountBalance * 1
        default:
            return state
    }
}