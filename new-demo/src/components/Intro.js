import React from 'react'
import inTro from "../images/intromob.png";

const Intro = () => {
  return (
    <div >
    <div className='Container1'>
    <div className='intro-main'>
      <div className='intro-text'>
<div className='text-intro-1'><span>— </span>INTRODUCING</div>
<div className='text-intro-2'>Pass2Open</div>
<div className='text-intro-3'>What if your children had to look at an educational flashcard every time they opened YouTube or Snapchat? Or perhaps answer a question to get into TikTok?</div>
      </div>

      <div className='mid-img-intro'>
<img  src={ inTro} width="337px" />
      </div>

</div>
    </div>
    </div>
  )
}

export default Intro;
