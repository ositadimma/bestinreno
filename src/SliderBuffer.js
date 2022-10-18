import Slider from './components/slider'
//import images from './images';
import React ,{useState}from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import t1 from './img/inspace.jpg';
import t2 from './img/roof.jpg';
import t3 from'./img/bright.jpg'
import t4 from './img/person1.jpg';
import t5 from './img/roofman.jpg';
import t6 from'./img/iris.jpg'

function SliderBuffer() {
 var images= [
   [t1,
    t4,
    'Amazing team! smiling, always nice to talk with, they always have the best advices for you, adapted to your needs!',
    'Jin Oya',
    'Customer• requested a space to fit her social life.'
   ],
   [t2,
    t5,
    'From start to finish, they were extremely professional, friendly, helpful and easy to do business with. Very happy with the experience and the company.',
     'Mike norsa', 
     'Customer• needed to stop roof from leaking.'
   ]
    ,[t3,
      t6,
    'Positive energy, great team spirit, hard workers and awesome people! I warmly recommend them!' ,
    'Iris bento',
    'Customer• desired a bright open space.'
    ]
  ]
  
  return (
    <>
    <div >
        <Slider slides={images}  autoPlay={5} />
    </div>
    
    </>
  );
}

export default SliderBuffer;
