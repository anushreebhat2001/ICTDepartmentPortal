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
    <div id = 'maint'>
    <table id='t'>
    {
        Data.filter(post => {
            if (query === '') {
            return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
             return post;
            }
         }).map((post, index) => (
        <ProjectCardStyled>
  <tr>
    <td>{post.topic}</td>
    <td>{post.faculty}</td>
    <td><a href={post.Purelink}>Pure Link</a></td>
    <td>{post.Email}</td>
  </tr>
    </ProjectCardStyled >
       ))
    }
    </table> 
    </div>
    </div>
    
    )
}

const ProjectCardStyled = styled.div`
    display: flex;
    overflow:hidden;
    padding: 0vw 7vw;
    flex-direction: row;
    border-bottom: 0.5px solid black;
    justify-content: space-evenly;
    overflow:hidden;
    background-color: rgb(255, 244, 230);
    padding-bottom: 2vw;
    margin: 0;
    td{
        padding:3vw;
        font-size: 1.5vw;
        font-weight: 600;
        align-self: left;
    }
    a
    {
        color: orange;
        transition: 0.35s all ease-in-out;
        font-weight: 700;

        &:hover
        {
            color: black;
        }
    }
`


export default Research
