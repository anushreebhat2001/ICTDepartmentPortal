import React from 'react'
import styled from 'styled-components'

const ProjectForm = () => {
    return (
        <ProjectFormStyled>
        <div class="box">
            <h2>Project Details</h2>
            <div class="Form">
                
                    <label for="Title">Title:</label>
                    <input type="text"></input>

                    <label for="Prerequisites">Prerequisites:</label>
                    <input type="text"></input> {/* This is going to be providing the tags */}

                    <label for="Faculty">Faculty:</label>
                    <input type="text"></input>

                    <label for="RegistrationLink">Registration Link:</label>
                    <input type="url"></input>

                    <label for="LastDate">Last Date:</label>
                    <input type="date"></input>  
                    <button type="submit">Submit</button>    
            </div>
            
        </div>  
        </ProjectFormStyled >
    )
}
//The prequisites can be used as tags and allow people to be able to see all particular

const ProjectFormStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .box
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        margin: 80px;
        width: 700px;
        padding: 30px;
        background-color:#f2f2f2;

        h2{
            background-color:#f2f2f2;
        }
    
        .Form
        {
            display:grid;
            grid-template-columns: max-content max-content;
            grid-gap:5px;
            align-items: center;
            padding: 25px;
            gap: 30px;
            background-color:#f2f2f2;

                label
                {
                    background-color:#f2f2f2;
                    font-size:1.1rem;
                    
                }
            
                input
                {
                    font-size: 20px;
                    width: 25vw;
                    padding: 5px;
                    outline: 0;
                    border-width: 0 0 2px;
                    
                }

            button
            {
                grid-column: 1 / -1;
                background-color: black;
                color: white;
                height: 50px;
                width: 100%;
                font-size:1.2rem;
                border: none;
                cursor: pointer;
                border-radius: 8px;
                transition: all .5s ease-in-out;

                &:hover
                {
                    transform: scale(1.05, 1.05);
                    color: orange;
                }
            }
        }

        
    }
    
`


export default ProjectForm
