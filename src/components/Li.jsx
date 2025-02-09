import React from 'react'

const Li = ({liText,liClass}) => {
    return (
      
          <li className={`${liClass}`}>{liText}</li>
      
    )
  }

export default Li