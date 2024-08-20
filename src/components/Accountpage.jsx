import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Accountpage = () => {
  const {ready,user} = useContext(UserContext);
  const [redirect,setRedirect] = useState(null);
  let {subpage} = useParams();
  if(subpage === undefined){
    subpage = 'profile';
  }

  async function logout(){
    await axios.post('/logout');
    setRedirect('/');
  }
  
  if(!ready){
    return 'Loading...';
  }
  if(ready && !user){
    return <Navigate to={'/login'}/>
  } 

  function linkClasses (type=null) {
    let classes= 'py-2 px-6';
    if(type === subpage){
        classes += ' bg-primary text-white rounded-full';
    }
    return classes;
  }

  if(redirect){
    return <Navigate to={redirect}/>
  }

  return (
    <div>
      <nav className='w-full justify-center flex mt-8 gap-4'>
        <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
        <Link className={linkClasses('places')} to={'/account/places'}>My accomodations</Link>
      </nav>
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto mt-4">
            Logged in as {user.name} ({user.email})<br />
            <button onClick={logout} className='primary max-w-sm mt=2'>Log out</button>
        </div>
      )}
    </div>
  )
}

export default Accountpage;
