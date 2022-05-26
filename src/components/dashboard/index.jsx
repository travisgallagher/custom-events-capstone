// @ts-nocheck
import React, { useEffect } from 'react'
import Calendar from '../calendar'
import "./index.css"

export const Dashboard = ({setPageTitle}) => {
  useEffect(() => {
    setPageTitle('Dashboard');
  },[]);

  return (
    <div className='dash-container'>
      <Calendar />
    </div>
  )
}
