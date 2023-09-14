import React from 'react';
import ansim from "../images/ans.png";

const Answer = () => {
  return (
    <div className='answer-main' >
      <div className='text-ans1'>Answer few questions to unlock <br />your favorite apps</div>

      <div className='text-ans2'>This app will help with student engagement and increase their learning through repetition of flashcards or by quiz. Our app is very simple to use and works by using the teachers current curriculum within google classroom. This app can interrupt the amount of continuous time the student is looking at social media or youtube.</div>

      <div className='text-ans3'>I believe social media is ruining the minds of our youth. This app puts educational material where our children are always looking - the screen of a tablet, phone or computer.</div>

      <div className='im-ans'>
        <img src={ansim}/>
      </div>

    </div>
  )
}

export default Answer;
