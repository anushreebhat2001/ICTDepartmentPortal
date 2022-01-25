import React, { useState } from "react";
import styled from "styled-components";
import CData from "../components/contact-info.json"; 

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

const Contact = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT IMPORTANT CONTACTS
                </div>
                </div>
            </div>
            <div id="bg">

            <h2 className="contacts">Contact List-</h2><br/><br/>
            <div><input type="search" className="search-bar" placeholder = "Search" onChange={event => setQuery(event.target.value)}/></div>
                    {
                        CData.filter(post => {
                            if (query === '') {
                            return post;
                            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <NewsCardStyled>
                            <div id='main' key={index}>
                            <h4 className="News">{post.title}</h4>
                            <p><a id='readnews' href={post.email}>{post.name} - {post.mailid}</a></p>
                            </div>
                            </NewsCardStyled>
                        ))
                    }
            </div>
        </div>
    );
};

export default Contact;