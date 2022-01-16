import React from 'react';
import Typical from 'react-typical';
import "./index.css";
const Home = () => {
  return ( 
    <div>  
      <div className = 'section1'>
        <div className = 'overlay'>
        <div className = 'heading'>
          <Typical loop= {Infinity} wrapper="b" steps={[
                'WELCOME TO THE ICT DEPARTMENT',
                3000,
                "",
                1000
          ]}
          />
          </div>
        </div>
      </div>
      <div id='white' className='div'>
      <div>
        <p class='exploremore'><a id='exlink' href="#dark">Explore more &or;</a></p></div>
        <div id='cl'><p className='head1'>DEPARTMENT of  I&amp;CT</p>
        <div className='carousel'></div>
        <div>
          <table>
          <tr>
            <th>Established</th>
            <th>Students</th> 
            <th>Faculty</th>
          </tr>
          <tr>
            <td>2000</td>
            <td>20000</td>
            <td>3000</td>
          </tr>
          </table>
        </div>
      </div>
      </div>
      <div id='dark' className='div'><div id='cl'><p className='head2'>I&amp;CT EVENTS</p></div>
      </div>
      <div id='light' className='div'><div id='cl'><p className='head3'>ICT NEWS/ANNOUNCEMENTS</p></div></div>
      <div id='white' className='div'><div id='cl'><p className='head3'>TESTIMONIALS</p></div></div>
    </div>  
  );
};

export default Home;