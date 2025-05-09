import Mylogo from './Mylogo';
import React from 'react'
import Mynav from './Mynav';
import Mybutton from './Mybutton';
 function Navbar() {
  return (
    <div className=" w-800 h-20 flex  items-center ">
<Mylogo/>
<Mynav/>
<Mybutton/>
    </div>
  )
}
export default Navbar;