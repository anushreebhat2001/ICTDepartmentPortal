import React from 'react';
import Typical from 'react-typical';
import "./index.css";
const Home = () => {
  return (    
      <div className = 'section1'>
        <div className = 'overlay'>
        <div className = 'heading'>
          <Typical loop= {Infinity} wrapper="b" steps={[
                'WELCOME TO THE ICT DEPARTMENT',
                3000,
                "",
                1000
          ]}
          />
          </div>
        </div>
      </div>
  );
};

export default Home;