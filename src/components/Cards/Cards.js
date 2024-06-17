import React from 'react'
import "./Cards.css"
import VaishnaviImg from "./Student_img/Vaishnavi.jpeg";

function Cards({StudentName}) {
  return (
    <div className="card">
        <div className='student-name'>{StudentName}</div>
        <div className='student-img'><img src={VaishnaviImg} className="student-img"/></div>
    </div>
  )
}

export default Cards