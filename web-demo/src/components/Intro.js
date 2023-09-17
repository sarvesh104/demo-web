import React from 'react';
import introi from "../images/intromob.png";
import './Intro.css';

const Intro = () => {
  return (
    <div className='Container'>
      <div className='intro-main'>
        <div className='intro-text'>
          <div className='text-intro-1'><span>— </span>INTRODUCING</div>
          <div className='text-intro-2'>Pass2Open</div>
          <div className='text-intro-3'>What if your children had to look at an educational flashcard every time they opened YouTube or Snapchat? Or perhaps answer a question to get into TikTok?</div>
        </div>

        <div className='mid-img-intro'>
          <img src={introi} alt="Introduction" />
        </div>
      </div>
    </div>
  );
};

export default Intro;


























// import React from 'react';
// import introi from "../images/intromob.png";
// import './Intro.css'; // Assuming you have a separate CSS file for styling

// const Intro = () => {
//   return (
//     <div className='Container'>
//       <div className='intro-main'>
//         <div className='intro-text'>
//           <div className='text-intro-1'><span>— </span>INTRODUCING</div>
//           <div className='text-intro-2'>Pass2Open</div>
//           <div className='text-intro-3'>What if your children had to look at an educational flashcard every time they opened YouTube or Snapchat? Or perhaps answer a question to get into TikTok?</div>
//         </div>
  
//         <div className='mid-img-intro'>
//           <img src={introi} alt="Introduction" />
//         </div>
  
//       </div>
//     </div>
//   )
// }

// export default Intro;