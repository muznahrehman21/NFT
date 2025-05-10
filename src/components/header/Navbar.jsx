import Mylogo from './Mylogo';
import React from 'react'
import Mynav from './Mynav';
import Mybutton from './Mybutton';
 function Navbar() {
  return (
    <div className="  m-auto flex   justify-between">
<Mylogo/>
<Mynav/>
<Mybutton/>
    </div>
  )
}
export default Navbar;