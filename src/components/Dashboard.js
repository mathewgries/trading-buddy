import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div>
                <Link to='/getdata'>
                    Get Data
                </Link>
            </div>
            <div>
                <Link to='/showdata'>
                    Show Data
                </Link>
            </div>
        </div>
    )
}