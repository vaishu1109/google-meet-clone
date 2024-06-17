import React from 'react'
import "./Cards.css"


function Cards({StudentName ,StudentImg}) {
  return (
    <div className="card">
        <div className='student-name'>{StudentName}</div>
        <div className='student-img'><img src={StudentImg} className="student-img"/></div>
        <div className='mic-img'><img src="https://www.svgrepo.com/show/327437/mic-off-circle.svg" className='mic-img'/></div>
    </div>
  )
}

export default Cards