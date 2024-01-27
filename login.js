// import React from 'react'

// function login() {
//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//         <div className='bg-white p-3 rounded w-25'>
//             <form action=''>
//                 <div className='mb-3'>
//                     <label htmlFor='email'>Email</label>
//                     <input type='Email' placeholder='Enter your Email address'/>
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor='Password'>Password</label>
//                     <input type='Password' placeholder='Enter your Password'/>
//                 </div>
//                 <button className='btn btn-success'>Login</button>
//                 <p>You are agree to our terms and conditions</p>
//                 <button className='btn btn-default border'>Create New-Account</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default login
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;




