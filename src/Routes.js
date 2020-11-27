import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import GetData from './probabilityCalculator/components/GetData'
import ShowData from './probabilityCalculator/components/ShowData'
import BarChart from './charts/barchart/components/BarChart'
import NotFound from './components/NotFound'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/getdata' component={GetData} />
            <Route exact path='/showdata' component={ShowData} />
            <Route exact path='/barchart' component={BarChart} />
            <Route component={NotFound}/>
        </Switch>
    )
}