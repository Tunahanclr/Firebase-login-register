import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { NavLink } from 'react-router-dom';
export default function ({users}) {
  const logoutFunc=()=>{
     signOut(auth)
    window.location = "/"
  }
  return (
  <div className='navbar'>
  <div className=' container items-center flex justify-between mx-auto '>
        <NavLink className='navbar-left hidd'>LOGO</NavLink>
        <div className='flex items-center gap-6 '>
        <div>
        </div>
        <div onClick={logoutFunc} className='navbar-right text-2xl'>Logout</div>
        </div>
    </div>
  </div>
  )
}
