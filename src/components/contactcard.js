import React from 'react'
import styled from 'styled-components'


const ContactCard = ({ title, name, mailid, email}) => {
    return (
        <NewsCardStyled>
            {/* The cards will be white and contain the heading of the post and a couple of lines of the post, to the right will be the number of threads */}
            <div className="main">
                <h4 className="News">{title}</h4>
                <p><a id='readnews' href={email}>{name}-{mailid}</a></p>
            </div>
        </NewsCardStyled>
    )
}

const NewsCardStyled = styled.main`

    padding-top: 2vw;
    padding-left: 6vw;
    padding-right: 6vw;
    
    h2{
        margin:2.4vw 0
    }
    p{
        padding-bottom:4vw;
        margin:0;
        border-bottom: 0.2vw solid #771E00;
    }
    .News
    {
        line-height: 3vw;
        padding-right: 4vw;
    }

    #readnews:hover
    {
        font-weight:700;
        color: #772800;
        text-decoration:none;
    }

    #readnews:link
    {
        font-weight:500;
        color: #B34610;
        text-decoration:none;
    }

    #readnews:active
    {
        color: #772800;
        font-weight:700;
        text-decoration:none;
    }
    
    #readnews:visited
    {
        color: #B34610;
        text-decoration:none;
    }
`

export default ContactCard
