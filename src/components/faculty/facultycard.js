import React from 'react'
import './facultycard.css'


const FacultyCard = ({ Name,Position,Qualification, Mailid, Email}) => {
    return (
            <div id='facpara'>
               <h4>{Name}</h4>
               <h5>{Position}</h5>
               <p>Department of Information & Communication Technology</p>
               <h4>Qualification:</h4><p>{Qualification}</p>
               <p><a href={Mailid}>{Email}</a></p>
               </div> 
    )
}


export default FacultyCard
