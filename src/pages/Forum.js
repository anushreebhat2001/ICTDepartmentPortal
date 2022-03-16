import { useDeprecatedInvertedScale } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

const Forum = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_2hhxqu7', 'template_i4hnq1j', e.target, '-axmLUEmu1V51128n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
        <ForumStyled>
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT FORUM
                </div>
                </div>
            </div>
            <div id='forum'>
            <form className='forum' onSubmit={sendEmail}>
                <h3>Enter your Query</h3>
           <input type="text" name="name" placeholder="Enter your Name" required/><br/>
           <input type="email" name="email" placeholder="Enter your mail id" required/><br/>
           <input type="text" name="sem" placeholder="Enter your semester no." required/><br/>
           <input type="text" name="Regno" placeholder="Enter your Reg. No." required/><br/>
           <textarea name='message' rows='4' placeholder="What's your Query?" required/><br/>
           <input type="submit" className='button' value="Send"></input>
           </form>
           </div>
        </div>
        </ForumStyled>
    )
}

const ForumStyled = styled.div`
background-color: rgb(255, 244, 230);
#forum{
    background-color: rgb(255, 244, 230);
    padding-bottom:5vh;

    h3{
        text-align:center;
        margin-top:0;
        font-size:2vh;
    }
}
.forum{
    background:white;
    display:flex;
    flex-direction:column;
    padding:8vw;
    margin:auto;
    margin-top:5vh;
    width:50%;
    max=width: 30vw;
    border-radius:5vw;

    input,textarea{
       border:0;
       margin: 1.5vw;
       padding:3vw;
       outline:none;
       background-color: rgb(255, 244, 230);
       border-radius:2vw;
       ::placeholder{
       color: rgb(119, 30, 0);}
    }

    textarea {
        font-family: 'Segoe UI';
     }

    .button{
       background: rgb(119, 30, 0); 
       padding:2vw 7vw;
       color:white;
       outline:none;
       border:0;
       border-radius:3vw;
       align-self:center;

    }
}
`

export default Forum
