import React from 'react'
import styled from 'styled-components'

const PlacementCard = ({ CompanyName, JobProfile, RegistrationLink, LastDate }) => {
    return (
        <PlacementCardStyled>
            <h4>{CompanyName}</h4>
            <h4>{JobProfile}</h4>
            <h4>
                <a href={RegistrationLink}>Link</a>
            </h4>
            <h4>{LastDate}</h4>
        </PlacementCardStyled >
    )
}

const PlacementCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 0.125px solid grey;
    border-left: 0.25px solid grey;
    border-left: 0.25px solid grey;
    border-bottom: 0.125px solid grey;
    padding: 2.5rem;

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

export default PlacementCard
