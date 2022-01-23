import React from 'react'
import styled from 'styled-components'
import ForumCard from '../components/ForumCard'

const Forum = () => {

    let c = 0;

    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT FORUM
                </div>
                </div>
            </div>
        <ForumStyled>
            {/* On the top right, below the navbar will be the button to create a new post and below that will be the Forum Cards of the already created posts */}
            <div class="ForumList">
                <ForumCard link={++c} title={"Hello"} text={"This is the first post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Second Year, Competition"} threads={"23 threads"} />
                <ForumCard link={++c} title={"Bye"} text={"This is the second post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Third Year, Coalition"} threads={"25 threads"} />
                <ForumCard link={++c} title={"Bye"} text={"This is the second post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Third Year, Coalition"} threads={"25 threads"} />
                <ForumCard link={++c} title={"Bye"} text={"This is the second post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Third Year, Coalition"} threads={"25 threads"} />
            </div>
        </ForumStyled>
        </div>
    )
}

const ForumStyled = styled.div`
background-color: rgb(255, 244, 230);

    .ForumList
    {
        display:flex;
        flex-direction: column-reverse;
        padding:4vw;
    }

    h1
    {
        margin-bottom: 30px;
    }
`

export default Forum
