import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'

const Research = () => {
    return (
        <div>
<div className = 'section'>
    <div className = 'overlay2'>
    <div className = 'heading2'>
        I&CT RESEARCH PROJECTS
    </div>
    </div>
    </div>
    <div id="bg">
    <ProjectsStyled>
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
            <ProjectCard Topic={"Protein Content in Sandy-Mole Rats"} Prerequisites={"Deep Learning, Data Analysis, Python, R"} Faculty={"Prof Abc Xyz"} Link={"Link"} LastDate={"22/12/2022"} />
    </ProjectsStyled>
    </div>
    </div>
    
    )
}

const ProjectsStyled = styled.div`
   margin:0vw 3vw;

`

export default Research
