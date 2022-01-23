import React from 'react'
import styled from 'styled-components'


const ForumCard = ({ title, text, threads, tags, link }) => {
    return (
        <ForumCardStyled href={link}>
            {/* The cards will be white and contain the heading of the post and a couple of lines of the post, to the right will be the number of threads */}
            <div class="leftSide">
                <h2>{title}</h2>
                <h3 id='forumdesc'>{text}</h3>
                <h4 id='forumtags'>{tags}</h4> {/*The topics and people it is relevant to, tags will also be used to list the posts of that particular tag*/}
            </div>
            <div class="rightSide">
                <h3>{threads}</h3>
            </div>
        </ForumCardStyled>
    )
}

const ForumCardStyled = styled.a`
    text-decoration: none;
    color: black;
    border-top: 0.125px solid grey;
    border-left: 0.25px solid grey;
    border-right: 0.25px solid grey;
    border-bottom: 0.125px solid grey;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    
    .leftSide
    {
        line-height: 26pt;
        padding-right: 20px;
    }

    #forumdesc{
        font-weight:500;
    }

    #forumtags
    {
        color: rgba(119, 30, 0);

        &:hover
        {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export default ForumCard
