import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Admin');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/auth/login', { username, password, role });
            if (response.data.login && response.data.role === 'admin') {
                navigate('/dashboard');
            } else {
                setError('Invalid credentials or role.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <div className='login-page'>
            <div className="login-container">
                <h2>Login</h2> <br/>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            placeholder='Enter Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <select 
                            name="role" 
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="admin">Admin</option> 
                            <option value="student">Student</option>
                        </select>
                    </div>
                    <button className='btn-login' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
