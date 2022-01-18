import React from 'react'
import styled from 'styled-components'
import ForumCard from '../components/ForumCard'

const Forum = () => {

    let c = 0;

    return (
        <ForumStyled>
            {/* On the top right, below the navbar will be the button to create a new post and below that will be the Forum Cards of the already created posts */}
            <h1>Forum</h1>
            <div class="ForumList">
                <ForumCard link={++c} title={"Hello"} text={"This is the first post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Second Year, Competition"} threads={"23 threads"} />
                <ForumCard link={++c} title={"Bye"} text={"This is the second post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Third Year, Coalition"} threads={"25 threads"} />
                <ForumCard link={++c} title={"Bye"} text={"This is the second post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Third Year, Coalition"} threads={"25 threads"} />
                <ForumCard link={++c} title={"Bye"} text={"This is the second post and this is just a test to see after how much content you can see on the card before needing to click it to see what's inside"} tags={"Third Year, Coalition"} threads={"25 threads"} />
            </div>
        </ForumStyled>
    )
}

const ForumStyled = styled.div`

    .ForumList
    {
        display:flex;
        flex-direction: column-reverse;
    }

    h1
    {
        margin-bottom: 30px;
    }
`

export default Forum
