import React, { useEffect } from 'react'
import "./index.css"

export const Payroll = ({setPageTitle}) => {
  useEffect(() => {
    setPageTitle('Payroll');
  },[]);
  return (
    <div>Payroll</div>
  )
}
