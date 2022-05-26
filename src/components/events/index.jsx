import React, { useEffect } from 'react'
import "./index.css"

export const Events = ({setPageTitle}) => {
  useEffect(() => {
    setPageTitle('Events');
  },[]);
  return (
    <div>events</div>
  )
}
