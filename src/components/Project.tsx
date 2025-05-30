import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>ImageGen </h2>
                <h3>Tech Stack: Node.js, Express.js, MongoDB, Mongoose, Razorpay SDK, React.js, React Router,React Toastify</h3>
                <p>A full-stack text-to-image generator app is built using React, Node.js, Express, and MongoDB. Users can register, log in, and generate images based on prompts, with a credit system for usage. The appintegrates Razorpay for payments, allowing users to purchase credits.</p>
            </div>
            <div className="project">
               <h2>RiskRadar</h2>
                <h3>TechStack:Python, Streamlit, SQLAlchemy, SpaCy, HuggingFace Transformers, LangChain</h3>
                <p>Built an AI-assisted project risk management system to analyze and report risks across multipleprojects. Used SpaCy for natural language query parsing and Hugging Face models for generating riskmitigation suggestions. Implemented a document upload pipeline with versioned changelog storage.Integrated a Streamlit-based chatbot to answer project-specific risk queries using stored metrics andLLM-based fallback.</p>
            </div>
            <div className="project">
              <h2>CrickPredict</h2>
              <h3>| Python, Scikit-Learn, Flask</h3>
              <p>Trained a machine learning model on past cricket match data to predict real-time match outcomes,utilizing statistical features like team performance, player form, and match conditions; deployed aFlask-based API for seamless integration, achieving an accuracy of 84% in win predictions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
