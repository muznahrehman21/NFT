import React from 'react'
import Mylogo from './components/header/Mylogo';
import Mynav from './components/header/Mynav';
import Mybutton from '../../components/header/Mybutton';
 function landingpage() {
  return (
    <div class="landingpagecolor">
    <div class="bar">
      <Mylogo/>
      <Mynav/>
      <Mybutton/>
      
    </div>
   
  </div>
  )
}
export default landingpage;
