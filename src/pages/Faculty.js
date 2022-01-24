import React, { useState } from "react";
import Data from "../components/faculty/faculty-info.json";
import "../components/faculty/facultycard.css";

const Faculty = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT FACULTY
                </div>
                </div>
            </div>
            <div id="bg">
            <p id='para'>Faculty of the Department of Information and Communication Technology at MIT for BTech (Information Technology, Computer & Communication Engineering), and MTech (Software Engineering, Computer Networking & Engineering).<br></br><br></br><strong>Faculty List</strong></p>
                <div><input className="search-bar" placeholder = "Search" onChange={event => setQuery(event.target.value)}/></div>
                    {
                        Data.filter(post => {
                            if (query === '') {
                            return post;
                            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                            }
                        }).map((post, index) => (
                            <div id='facpara' key={index}>
                            <h4>{post.name}</h4>
                            <h5>{post.position}</h5>
                            <p>Department of Information & Communication Technology</p>
                            <h4>Qualification:</h4><p>{post.qualification}</p>
                            <p><a href={post.mailid}>{post.mail}</a></p>
                            </div>
                        ))
                    }
        </div>
        </div>
    );
};

export default Faculty;
