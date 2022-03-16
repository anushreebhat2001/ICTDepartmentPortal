import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ Topic, Faculty, Link, Email }) => {
    return (
        <ProjectCardStyled>
            <h4>{Topic}</h4>
            <h4>{Faculty}</h4> {/* This must be a link, once i figure out how to connect external links in react, this will redirect you to the faculty's page on Manipal.edu */}
            <h4><a href={Link}>{"Pure Link"}</a></h4>
            <h4>{Email}</h4>
        </ProjectCardStyled >
    )
}

const ProjectCardStyled = styled.div`
    display: flex;
    padding: 2.5vw;
    flex-direction: row;
    border-bottom: 0.5px solid black;
    justify-content: space-evenly;

    h4{
        padding:3vw;
    }
    a
    {
        text-decoration: none;
        color: orange;
        transition: 0.75s all ease-in-out;

        &:hover
        {
            color: black;
        }
    }
`

export default ProjectCard
