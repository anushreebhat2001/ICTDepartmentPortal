// import { div } from 'prelude-ls'
import React from 'react'
import styled from 'styled-components'
import PlacementCard from '../components/PlacementCard'

const Placements = () => {
    return (
        <PlacementsStyled>
            <h1>Placement / Internship Opportunities</h1>
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
        </PlacementsStyled>
    )
}

const PlacementsStyled = styled.div`
    
`

export default Placements
