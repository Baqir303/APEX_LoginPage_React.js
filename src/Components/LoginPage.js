import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    const isValidFormat = /^[0-9]{2}[a-zA-Z]-[0-9]{4}$/.test(value);
    setUsername(value);
    setIsValidUsername(isValidFormat);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (isValidUsername) {
      console.log('Logging in with username:', username);
      console.log('Password:', password);
    } else {
      console.error('Invalid username format. Please enter in the format "ddX-dddd" (e.g., 21k-3886).');
    }
  };

  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>APEX NUCES.</h1>
        
            <h2>WE ASPIRE FOR EDUCATION</h2>
          
        </div>
      </div>

      <div className="right">
        <div className="inputs my-5">
        <input type="text" placeholder="Username (e.g 21k-3886)" value={username} onChange={handleUsernameChange} style={{ borderColor: isValidUsername ? 'initial' : 'red' }} />

          {!isValidUsername && (
            <p style={{ color: 'red' }}>
              Please enter a valid username in the format "ddX-dddd" (e.g., 21k-3886).
            </p>
          )}
          <br />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        </div>
          <button className='LoginBtn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
