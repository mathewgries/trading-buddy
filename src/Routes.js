import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import GrowthCalculator from './components/GrowthCalculator'
import TradingBuddy from './components/TradingBuddy'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/growthCalculator' component={GrowthCalculator}/>
            <Route exact path='/tradingBuddy' component={TradingBuddy}/>
        </Switch>
    )
}