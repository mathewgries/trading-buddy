import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div>
                <Link to='/growthCalculator'>
                    Growth Calculator
                </Link>
            </div>
            <div>
                <Link to='/tradingBuddy'>
                    Trading Budding
                </Link>
            </div>
        </div>
    )
}