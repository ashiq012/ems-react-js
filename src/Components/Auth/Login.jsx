import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

function Login({handleLogin}) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");    
    }

  return (
    <div className='login-container h-screen flex items-center justify-center w-screen bg-black text-white'>
        <div className='border-1 pb-2 border-green-500 rounded-2xl p-10 shadow-xl '>    
            <form action="" className='flex flex-col gap-10 text-xl m-10 '
                onSubmit={(e) => submitHandler(e)}>
                <input type="text" name=""  placeholder='email' 
                className='border-2 rounded-lg p-5 border-green-500' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" name=""  placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-2 rounded-lg p-5 border-green-500'/>
                <button className='bg-green-500 text-white text-md p-5
                 rounded-lg hover:bg-green-600' 
                >Login</button>
            </form>
        </div>    
    </div>
  )
}

export default Login