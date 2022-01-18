import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ Topic, Prerequisites, Faculty, Link, LastDate }) => {
    return (
        <ProjectCardStyled>
            <h4>{Topic}</h4>
            <h4>{Prerequisites}</h4> {/* Further, these prerequisites maybe made into tags so that people can search Projects based on Tags */}
            <h4>{Faculty}</h4> {/* This must be a link, once i figure out how to connect external links in react, this will redirect you to the faculty's page on Manipal.edu */}
            <h4><a href={Link}>{Link}</a></h4>
            <h4>{LastDate}</h4>
        </ProjectCardStyled >
    )
}

const ProjectCardStyled = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: row;
    border-top: 0.125px solid grey;
    border-left: 0.25px solid grey;
    border-left: 0.25px solid grey;
    border-bottom: 0.125px solid grey;
    justify-content: space-evenly;

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
