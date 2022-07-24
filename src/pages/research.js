import React, { useState } from "react";
import Data from "../components/Research.json";
import styled from 'styled-components'


const Research = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
<div className = 'section'>
    <div className = 'overlay2'>
    <div className = 'heading2'>
        I&CT RESEARCH PROJECTS
    </div>
    </div>
    </div>
    <div>
    {
        Data.filter(post => {
            if (query === '') {
            return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
             return post;
            }
         }).map((post, index) => (
        <ProjectCardStyled>
            <h4>{post.topic}</h4>
            <h4>{post.faculty}</h4> {/* This must be a link, once i figure out how to connect external links in react, this will redirect you to the faculty's page on Manipal.edu */}
            <h4><a href={post.Purelink}>Pure Link</a></h4>
            <h4>{post.Email}</h4>
        </ProjectCardStyled >
       ))
    }
    </div>
    </div>
    
    )
}

const ProjectCardStyled = styled.div`
    display: flex;
    overflow:hidden;
    padding: 2.5vw 7vw;
    flex-direction: row;
    border-bottom: 0.5px solid black;
    justify-content: space-evenly;
    overflow:hidden;
    background-color: rgb(255, 244, 230);
    padding-bottom: 8vw;
    margin: 0;
    h4{
        padding:3vw;
        font-size: 3vw;
    }
    a
    {
        text-decoration: none;
        color: orange;
        transition: 0.35s all ease-in-out;

        &:hover
        {
            color: black;
        }
    }
`


export default Research
