import React from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'

function Hone() {
  document.title = "React | Homepage"
  return (
  <>
    <Sidenav/>
    <div className='w-[80%] h-screen '>
      <Topnav/>
    </div>
  </>
  )
}

export default Hone
