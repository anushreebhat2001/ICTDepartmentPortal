// import { div } from 'prelude-ls'
import React from 'react'
import placement from '../../src/Placements/placementbrochure.pdf';
import statisticsug from '../../src/Placements/statistics.pdf';
import statisticspg from '../../src/Placements/MtechStatistics.pdf';

const Placements = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT INTERNSHIP/PLACEMENTS
                </div>
                </div>
            </div>
            <div className="infobg">
                <p>PLACEMENTS HIGHLIGHTS
                Manipal Institute of Technology (MIT) Manipal has always been very proactive in placing the students into their preference profiles. The institute has a well-organised placement team headed by the associate director, three assistant directors, and faculty and student coordinators from each department. 300+ recruiting teams, including 50+ Fortune 500 companies, visit MIT Manipal for UG and PG campus placements and internships recruitment every year.</p>
                <table className='tplacements'>
                    <caption className='placementstatistics'><strong>PLACEMENT STATISTICS 2021-22</strong></caption>
                <tr className='tableplacements'>
                    <th className='tableplacements'>CTC IN LPA</th>
                    <th className='tableplacements'>LPA (in INR)</th>
                </tr>
                <tr className='tableplacements'>
                    <td className='tableplacements'>MAX</td>
                    <td className='tableplacements'>44</td>
                </tr>
                <tr className='tableplacements'>
                    <td className='tableplacements'>MIN</td>
                    <td className='tableplacements'>3.6</td>
                </tr>
                <tr className='tableplacements'>
                    <td className='tableplacements'>AVG</td>
                    <td className='tableplacements'>12.36</td>
                </tr>
                <tr className='tableplacements'>
                    <td className='tableplacements'>MEDIAN</td>
                    <td className='tableplacements'>10</td>
                </tr>
                </table>
                <a id="infobrochure" href={placement}><strong>INFORMATION BROCHURE</strong></a><br></br><br></br>
                <a id="statistics" href={statisticsug}><strong>PLACEMENT STATISTICS (UG 2021-22)</strong></a><br></br><br></br>
                <a id="statistics" href={statisticspg}><strong>PLACEMENT STATISTICS (PG 2021-22)</strong></a><br></br><br></br>
        </div>
        </div>
    )
}

export default Placements

