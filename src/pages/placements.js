// import { div } from 'prelude-ls'
import React from 'react'
import styled from 'styled-components'
import PlacementCard from '../components/PlacementCard'

const Placements = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT INTERNSHIP/PLACEMENTS
                </div>
                </div>
            </div>
            <div id="bg">
            <PlacementsStyled>
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
            <PlacementCard CompanyName={"Accolite Digital"} JobProfile={"Software Engineer"} RegistrationLink={"www.google.com"} LastDate={"12-05-21"} />
        </PlacementsStyled>
        </div>
        </div>
    )
}

const PlacementsStyled = styled.div`
    
`

export default Placements

