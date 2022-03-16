import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const QP = () => {
    return (
        <div>
<div className = 'section'>
    <div className = 'overlay2'>
    <div className = 'heading2'>
        I&CT QUESTION PAPERS
    </div>
    </div>
    </div>

    <div id="bg">
        <p id="pqp">
            <table className='Tablesemmain'>
            <th colspan="2">Semester</th>
               <tbody>
                   <tr><td className='tqp'><a className='Tablesem' href=''><FontAwesomeIcon icon = {faFolder}/></a></td><td><a className='Tablesem' href="">III Sem</a></td></tr>
                   <tr><td className='tqp'><a className='Tablesem' href=''><FontAwesomeIcon icon = {faFolder}/></a></td><td><a className='Tablesem' href="">IV Sem</a></td></tr>
                   <tr><td className='tqp'><a className='Tablesem' href=''><FontAwesomeIcon icon = {faFolder}/></a></td><td><a className='Tablesem' href="">V Sem</a></td></tr>
                   <tr><td className='tqp'><a className='Tablesem' href=''><FontAwesomeIcon icon = {faFolder}/></a></td><td><a className='Tablesem' href="">VI Sem</a></td></tr>
                   <tr><td className='tqp'><a className='Tablesem' href=''><FontAwesomeIcon icon = {faFolder}/></a></td><td><a className='Tablesem' href="">VII Sem</a></td></tr>
                   <tr><td className='tqp'><a className='Tablesem' href=''><FontAwesomeIcon icon = {faFolder}/></a></td><td><a className='Tablesem' href="">MTech</a></td></tr>
               </tbody>
            </table>
        </p>
    </div>
    </div>
    
    )
}

export default QP;
