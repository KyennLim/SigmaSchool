// app.jsx
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('anonymous');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {

      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found. Please log in.');
        return;
      } else {
        navigate('/dashboard');
      }
      
      try {
        const response = await fetch('http://localhost:3000/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Username fetched successfully:', data.username);
          setUsername(data.username);
        } else {
          console.error('Failed to fetch username:', data.error);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div>
      <h1>Welcome {username} to the Home Page</h1>
    </div>
  );
}

export default App;