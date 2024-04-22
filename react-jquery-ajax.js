import React, { useState } from 'react';
import $ from 'jquery'; // Import jQuery

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Construct the URL with concatenated login and passw parameters
    const apiUrl = 'http://portal.mashitec.com/SalesWebApi/api/User1/?login=' + encodeURIComponent(username) + '&passw=' + encodeURIComponent(password);

    // Make POST request to API
    $.ajax({
      type: 'POST',
      url: apiUrl,
      success: function(response) {
        // Check if the response matches the username
        if (response.toLowerCase() === username.toLowerCase()) {
          setMessage('Authorized');
        } else {
          setMessage('Not Authorized');
        }
      },
      error: function(xhr, status, error) {
        setMessage('Error: ' + error);
      }
    });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p id="message">{message}</p>
    </div>
  );
}

export default LoginForm;

