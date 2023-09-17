import React from "react";
import aboutbg from "../images/aboutus.png";
import "./About.css"; // Assuming you have a separate CSS file for styling

const About = () => {
  return (
    <div className="about">
      <div>
        {" "}
        <h2 id="abus">About Us</h2>
      </div>
      <div className="about-main">
        <div className="about-text">
          How does our app work? It works when a student clicks on an app such
          as Youtube, Snapchat, Facebook, TikTok or any other app you deem
          necessary. Every time the student clicks on the app, the student will
          be looking at a quiz that is related to their class curriculum or
          flashcards to practice for the SAT, a second language, or anything
          educational. Pass2Open can also pop-up flashcards or quizzes
          intermittently while the student is looking at YouTube or social
          media, creating more engagement for the child.
        </div>

        <div className="about-img">
          <img src={aboutbg} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from 'react'
// import aboutbg from "../images/aboutus.png"
// const About = () => {
//   return (
//     <div className='about'>
//       <div className='about-main'>
//         <h2>About Us</h2>
//         <div className='about-text'>How does our app work? It works when a student clicks on an app such as Youtube, Snapchat, Facebook, TikTok or any other app you deem necessary. Everytime the student clicks on the app, the student will be looking at a quiz that is related to their class curriculum or flashcards to practice for the SAT, a second language, or anything educational. Pass2Open can also pop-up flash cards or quizes intermittently while the student is looking at YouTube or social media creating more engagement for the child.</div>
//       </div>
//       <div className='about-img'><img src={aboutbg} /></div>
//     </div>
//   )
// }

// export default About;
