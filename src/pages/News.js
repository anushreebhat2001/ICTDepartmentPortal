import React from "react";
import NewsCard from "../components/NewsCard";
import NewsData from "../components/news/news-info.json";
import "./News.css";

const News = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT NEWS/ANNOUNCEMENTS
                </div>
                </div>
            </div>
            <div id="bg" className="bg1">
            {
                  NewsData.map((post, index) => (
                    <div key={index}>
                  <NewsCard 
                    title={post.titl}
                    day={post.d} 
                    smalldesc={post.sdesc}
                    description={post.desc}/>
                    </div>
                  ))
              }
            {/*<NewsCard  title='Announcement1' day='20 Jan' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' link='#'/>
            <NewsCard  title='Announcement2' day='21 Jan' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex .' link='#'/>
            <NewsCard  title='Announcement3' day='22 Jan' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui.' link='#'/>
            <NewsCard  title='Announcement4' day='23 Jan' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' link='#'/>
            */}
        </div>
        </div>
    );
};

export default News;
