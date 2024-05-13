// App.js
import React, { useState } from 'react';
import './App.css';

const Header = () => (
  <header>
    <div className="background-image">
      <img src="sampleprofilepic.jpg" alt="Background" />
      <div className="overlay">
        <h1>Edwin McMillan</h1>
      </div>
    </div>
  </header>
);

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>
      Welcome to the digital realm! I'm Edwin McMillan, a dedicated software
      developer currently enrolled in the Coding Temple bootcamp. With a passion
      for crafting innovative solutions, I specialize in full-stack development,
      proficient in technologies like Python, CSS, MySQL, React, and Flask. 
      From architecting robust backend systems to crafting intuitive front-end
      interfaces, I excel at transforming complex ideas into elegant, efficient
      code. Let's collaborate to shape the future of technology together.
    </p>
  </section>
);

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showNetworkMessage, setShowNetworkMessage] = useState(false);

  const handleEmailHover = () => {
    setShowEmailForm(true);
  };

  const handleEmailLeave = () => {
    setShowEmailForm(false);
  };

  const handleLinkedInHover = () => {
    setShowNetworkMessage(true);
  };

  const handleLinkedInLeave = () => {
    setShowNetworkMessage(false);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div
        className="email-field"
        onMouseEnter={handleEmailHover}
        onMouseLeave={handleEmailLeave}
      >
        {/* Email field */}
        {showEmailForm && (
          <div className="email-form">
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Your message"></textarea>
            <button>Submit</button>
          </div>
        )}
      </div>
      <div
        className="linkedin-profile"
        onMouseEnter={handleLinkedInHover}
        onMouseLeave={handleLinkedInLeave}
      >
        {/* LinkedIn profile icon */}
        {showNetworkMessage && (
          <div className="network-message">
            <p>Let's network!</p>
          </div>
        )}
      </div>
    </section>
  );
};

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Contact />
  </div>
);

export default App;


