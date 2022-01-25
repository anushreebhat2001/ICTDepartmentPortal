import React, { useState } from "react";
import styled from 'styled-components';
import Popup from "./popup/Popup";
    
    export function NewsCard ({ title, day, description })  {
        const [isOpen, setIsOpen] = useState(false);
    
        const togglePopup = () => {
            setIsOpen(!isOpen);
        }
        return (
        <NewsCardStyled>
            {/* The cards will be white and contain the heading of the post and a couple of lines of the post, to the right will be the number of threads */}
            <div className="main">
                <h2 className="News">{title}</h2>
                <p id='day'>{day}</p>
                <p id='pan'>{description}...<span><div id="read"><button className="readmorenews" onClick={togglePopup} >Read more</button></div>
                {isOpen && <Popup
                content={<>
                    <b id="eventname">{title}</b>
                    <p id="popupcard"><strong>Day:</strong> {day}<br></br></p>
                    <p id="popupdesc">{description}</p>
                </>}
                handleClose={togglePopup}
                />}</span></p>
            </div>
        </NewsCardStyled>
    )
}

const NewsCardStyled = styled.main`

    padding-top: 2vw;
    padding-left: 4vw;
    padding-right: 4vw;
    #eventname{
        padding:3vw;
        font-size:3.6vw;
    }
    #popupcard{
        padding-left:3vw;
        font-size:2.3vw;
    }
    #popupdesc{
        padding-left:3vw;
        font-size: 2vw;
    }
    #day{
        font-weight:500;
        color:#B34610;
    }
    h2{
        margin:2.4vw 0
    }
    #pan{
        padding-bottom:4vw;
        margin:0;
        border-bottom: 0.2vw solid #771E00;
    }
    .News
    {
        margin-top:1vw
        line-height: 3vw;
        padding-right: 4vw;
    }

    .readmorenews{
        font-weight:600;
    }

    #readnews:hover
    {
        font-weight:700;
        color: #B34610;
        text-decoration:none;
    }

    #readnews:link
    {
        color: #F06E20;
        text-decoration:none;
    }

    #readnews:active
    {
        color: #B34610;
        text-decoration:none;
    }
    
    #readnews:visited
    {
        color: #772800;
        text-decoration:none;
    }
`

export default NewsCard
