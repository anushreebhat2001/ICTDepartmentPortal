import React from 'react';
import Typical from 'react-typical';
import "./index.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { EventCard } from "../components/eventscard/EventsCard";
import EventsData from "../components/events/events-info.json";
import NewsData from "../components/news/news-info.json";

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
          <img id='imgcar' src={fadeImages[0]} />
        </div>
        <div id='imgcar' className="each-fade">
          <img id='imgcar' src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img id='imgcar' src={fadeImages[2]} />
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
            <td>1000+</td>
            <td>63</td>
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
              {
                  <table id='ecard1'>
                  <tr>
                  <td>
                  <EventCard 
                    poster={process.env.PUBLIC_URL + EventsData[0].poster1}
                    day={EventsData[0].d1} 
                    month={EventsData[0].m1} 
                    eventname={EventsData[0].n1}
                    venue={EventsData[0].v1} 
                    time={EventsData[0].t1} 
                    description={EventsData[0].desc1}
                    link={EventsData[0].link1}/>
                    </td>
                    <td>
                  <EventCard 
                    poster={process.env.PUBLIC_URL + EventsData[0].poster2}
                    day={EventsData[0].d2} 
                    month={EventsData[0].m2} 
                    eventname={EventsData[0].n2}
                    venue={EventsData[0].v2} 
                    time={EventsData[0].t2} 
                    description={EventsData[0].desc2}
                    link={EventsData[0].link2}/>
                    </td>
                    <td>
                  <EventCard 
                    poster={process.env.PUBLIC_URL + EventsData[0].poster3}
                    day={EventsData[0].d3} 
                    month={EventsData[0].m3} 
                    eventname={EventsData[0].n3}
                    venue={EventsData[0].v3} 
                    time={EventsData[0].t3} 
                    description={EventsData[0].desc3}
                    link={EventsData[0].link3}/>
                    </td>
                    <td>
                  <EventCard 
                    poster={process.env.PUBLIC_URL + EventsData[0].poster4}
                    day={EventsData[0].d4} 
                    month={EventsData[0].m4} 
                    eventname={EventsData[0].n4}
                    venue={EventsData[0].v4} 
                    time={EventsData[0].t4} 
                    description={EventsData[0].desc4}
                    link={EventsData[0].link4}/>
                    </td>
                    </tr>
                  </table>
              }
        </div>
        <div id="button"><a id="href1" href="/Events">MORE I&amp;CT EVENTS</a></div>
      </div>
      <div id='light' className='div'><div id='cl'><p className='head3'>I&amp;CT NEWS/ANNOUNCEMENTS</p></div>
      <div id="news">
        <div className='article' id='big'><p id='newsarticle'><h3>{NewsData[0].titl}</h3>{NewsData[0].desc.split(' ').slice(0, 45).join(' ')}...<a id="newread" href="/News">Read more</a></p></div>
        <div className='article' id='small'><p id='newsarticle'><h4>{NewsData[1].titl}</h4>{NewsData[1].desc.split(' ').slice(0, 15).join(' ')}...<a id="newread" href="/News">Read more</a></p></div>
        <div className='article' id='small'><p id='newsarticle'><h4>{NewsData[2].titl}</h4>{NewsData[2].desc.split(' ').slice(0, 15).join(' ')}...<a id="newread" href="/News">Read more</a></p></div></div>
        <div id="news">
        <div className='article' id='small'><p id='newsarticle'><h3>News Title</h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem...<a id="newread" href="/News">Read more</a></p></div>
        <div className='article' id='small'><p id='newsarticle'><h3>News Title</h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem...<a id="newread" href="/News">Read more</a></p></div>
        <div className='article' id='big'><p id='newsarticle'><h3>News Title</h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum...<a id="newread" href="/News">Read more</a></p></div>
      </div>
      <div id="button"><a id="href2" href="/News">MORE I&amp;CT NEWS/ANNOUNCEMENTS</a></div>
      </div>
      <div id='white' className='div'><div id='cl'><p className='head3'>AREAS OF RESEARCH</p></div>
      <div><div id="research"><p id="current">Current Research Subjects</p></div>
        <form>
          <ul id='list1'>
            <li id='li'>Cyber Security</li>
            <li id='li'>Data Analytics</li>
            <li id='li'>Social Network Analysis</li>
            <li id='li'>Computer Vision</li>
            <li id='li'>Data Mining</li>
          </ul>
          <ul id='list2'>
            <li id='li'>Wireless Communication</li>
            <li id='li'>Optimization</li>
            <li id='li'>Software Engineering</li>
            <li id='li'>Image processing</li>
            <li id='li'>Information Security</li>
          </ul>
          <ul id='list2'>
            <li id='li'>Semantic Web</li>
            <li id='li'>Information Retrival</li>
            <li id='li'>Opinion Mining</li>
            <li id='li'>Internet of Things</li>
            <li id='li'>NLP</li>
          </ul>
        </form>
        </div>
      <div id="button"><a id="href3" href="/research">MORE IN I&amp;CT RESEARCH</a></div>
      </div>
    </div>  
  );
};

export default Home;