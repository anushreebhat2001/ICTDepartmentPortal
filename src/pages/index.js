import React from 'react';
import Typical from 'react-typical';
import "./index.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://manipal.edu/content/dam/manipal/mu/mit/images/galleryImage/1-mit-laboratory.jpg",
  "https://manipal.edu/content/dam/manipal/mu/mit/images/galleryImage/1-innovative-center-library-mit-facilities.jpg",
  "https://manipal.edu/content/dam/manipal/mu/mit/images/galleryImage/1-computing.JPG"
];

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
        <p class='exploremore'><a id='exlink' href="#white">Explore more &or;</a></p></div>
        <div id='cl'><p className='head1'>DEPARTMENT of  I&amp;CT</p>
        <div id='container'></div>
        <div id='myCarousel'>
          
        <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
    </div>
    <div id='mission'>
        <p><strong>Vision<br></br></strong><br></br>"Excellence in Information and Communication Technology education through continuous learning and teamwork"<br></br>
          <strong><br></br>Mission<br></br></strong><br></br>"To provide expertise in planning, designing, implementing and deploying IT infrastructure, to realize information 
          systems aiming at providing solutions to societal requirements, and to promote quality education and research." 
          <br></br>The department offers B.Tech. (Information Technology, Computer and Communication Engineering), M.Tech. (Software Engineering, 
          Computer Networking &amp; Engineering) and PhD programs.<br></br>
        </p>
      </div>
        <div className="tablediv">
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
      <div id='dark' className='div'>
        <div id='cl'>
          <p className='head2'>I&amp;CT EVENTS</p>
        </div>
        <div id="pannel">
        <div id="card">
        <div id="calendar"><p id='date'><strong>12</strong><br></br>Jan</p></div>
          <div id="uppercard"></div>
          <div id="lowercard">
            <p id="details">
            <strong>EVENT NAME<br></br></strong><strong><br></br>Venue: </strong> Teams<br></br><strong>Time: </strong> 5:00PM
            </p>
            <div id="read"><a className="readmore" href="#">Read more</a>
          </div></div>
        </div>
        <div id="card1">
        <div id="calendar"><p id='date'><strong>12</strong><br></br>Jan</p></div>
          <div id="uppercard"></div>
          <div id="lowercard">
            <p id="details">
            <strong>EVENT NAME<br></br></strong><strong><br></br>Venue: </strong> Teams<br></br><strong>Time: </strong> 5:00PM
            </p>
            <div id="read"><a className="readmore" href="#">Read more</a>
          </div></div>
        </div>
        <div id="card2">
        <div id="calendar"><p id='date'><strong>12</strong><br></br>Jan</p></div>
          <div id="uppercard"></div>
          <div id="lowercard">
            <p id="details">
            <strong>EVENT NAME<br></br></strong><strong><br></br>Venue: </strong> Teams<br></br><strong>Time: </strong> 5:00PM
            </p>
            <div id="read"><a className="readmore" href="#">Read more</a>
          </div></div>
        </div>
        <div id="card3">
        <div id="calendar"><p id='date'><strong>12</strong><br></br>Jan</p></div>
          <div id="uppercard"></div>
          <div id="lowercard">
            <p id="details">
            <strong>EVENT NAME<br></br></strong><strong><br></br>Venue: </strong> Teams<br></br><strong>Time: </strong> 5:00PM
            </p>
            <div id="read"><a className="readmore" href="#">Read more</a>
          </div></div>
        </div>
        </div>
        <div id="button"><a id="href1" href="#white">MORE I&amp;CT EVENTS</a></div>
      </div>
      <div id='light' className='div'><div id='cl'><p className='head3'>I&amp;CT NEWS/ANNOUNCEMENTS</p></div>
      <div id="news">
        <img className='article' id='big'></img>
        <img className='article' id='small'></img>
        <img className='article' id='small'></img></div>
        <div id="news">
        <img className='article' id='small'></img>
        <img className='article' id='small'></img>
        <img className='article' id='big'></img>
      </div>
      <div id="button"><a id="href2" href="#white">MORE I&amp;CT NEWS/ANNOUNCEMENTS</a></div>
      </div>
      <div id='white' className='div'><div id='cl'><p className='head3'>AREAS OF RESEARCH</p></div>
      <div><div id="research"><p id="current">Current Research</p></div>
        <form>
          <ul id='list1'>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <ul id='list2'>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </form>
        </div>
      <div id="button"><a id="href3" href="#white">MORE IN I&amp;CT RESEARCH</a></div>
      </div>
    </div>  
  );
};

export default Home;