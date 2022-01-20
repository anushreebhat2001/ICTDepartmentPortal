import React from 'react'
import styled from 'styled-components'


const NewsCard = ({ title, day, description, link }) => {
    return (
        <NewsCardStyled>
            {/* The cards will be white and contain the heading of the post and a couple of lines of the post, to the right will be the number of threads */}
            <div className="main">
                <h2 className="News">{title}</h2>
                <p id='day'>{day}</p>
                <p id='pan'>{description}...<span><a id='readnews' href={link}>Read more</a></span></p>
            </div>
        </NewsCardStyled>
    )
}

const NewsCardStyled = styled.main`

    padding-top: 2vw;
    padding-left: 4vw;
    padding-right: 4vw;
    
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
